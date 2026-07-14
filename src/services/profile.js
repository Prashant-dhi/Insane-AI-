import { auth, db } from "../firebase/firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function saveProfile(profile) {
  const user = auth.currentUser;

  if (!user) throw new Error("User not logged in");

  await setDoc(
    doc(db, "users", user.uid),
    {
      name: profile.name,
      email: user.email,
      avatar: profile.avatar,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function loadProfile() {
  const user = auth.currentUser;

  if (!user) return null;

  const snap = await getDoc(
    doc(db, "users", user.uid)
  );

  if (!snap.exists()) {
    return {
      name: user.displayName || "",
      email: user.email || "",
      avatar: user.photoURL || "",
    };
  }

  return snap.data();
}