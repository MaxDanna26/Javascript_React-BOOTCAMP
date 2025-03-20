import { db, collection, addDoc, getDocs, query, where } from './firebase';

const collectionName = 'usersMessage'

// CREATE

export const createUser = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
}

// READ
export const getUsers = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

// Acceso al nombre
export const access = async (name) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('name', '==', name)));
  if (result.size === 0) {
    const a = await addDoc(colRef, { name });
    return a.id;
  }
  return result.docs[0].id;
}


const getArrayFromCollection = (collection) => {
  return collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
}