import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  deleteUser,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

// Login
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Signup
export async function signup(name, email, password) {

  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(result.user, {
    displayName: name,
  });

  return result;
}

// Logout
export async function logoutUser() {
  return signOut(auth);
}

// Google Login
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Github Login
export async function loginWithGithub() {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
}

// Delete Current User
export async function deleteCurrentUser() {
  if (!auth.currentUser) return;

  return deleteUser(auth.currentUser);
}