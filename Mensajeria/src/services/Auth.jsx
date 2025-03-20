import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc, db, collection, addDoc } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // sendEmailVerification(userCredential.user);
    const user = userCredential.user;
    const docRef = doc(db, 'usersMessage', user.uid);
    await setDoc(docRef, { name, email, password });
    return user.uid;
  } catch (err) {
    return err.message;
  }
}

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
  } catch (err) {
    return err.message;
  }
}

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then(result => {
    return result.user;
  });
}

// CREATE INFO
export const createInfo = async (idUser, obj) => {
  const colRef = collection(db, 'users', idUser, 'info');
  const data = await addDoc(colRef, obj);
  return data.id;
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);
