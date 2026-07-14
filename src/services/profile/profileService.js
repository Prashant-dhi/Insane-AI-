import { auth, db, storage } from "../../firebase";

import {
doc,
getDoc,
setDoc,
serverTimestamp
} from "firebase/firestore";

import {
ref,
uploadBytes,
getDownloadURL
} from "firebase/storage";

export async function getProfile() {

const user = auth.currentUser;

if (!user) return null;

const refDoc = doc(db,"users",user.uid);

const snap = await getDoc(refDoc);

if(!snap.exists()){

const data = {

name: user.displayName || "",

email: user.email,

photoURL: user.photoURL || "",

createdAt: serverTimestamp(),

};

await setDoc(refDoc,data);

return data;

}

return snap.data();

}

export async function saveProfile(data){

const user = auth.currentUser;

if(!user) return;

await setDoc(

doc(db,"users",user.uid),

data,

{merge:true}

);

}

export async function uploadAvatar(file){

const user = auth.currentUser;

const imageRef = ref(
storage,
`avatars/${user.uid}/avatar`
);

await uploadBytes(imageRef,file);

return await getDownloadURL(imageRef);

}