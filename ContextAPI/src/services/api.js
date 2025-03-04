import { db, doc, getDoc, getDocs, collection, updateDoc, deleteDoc, addDoc, query, where } from "./firebase";

const collectionName = 'users';

// CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
}

// UPDATE
export const updateItem = async (userId, id, obj) => {
  const docRef = doc(db, 'users', userId, 'tasks', id);
  await updateDoc(docRef, obj)
}

// READ
export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('age', '==', value)));
  return getArrayFromCollection(result);
}

export const getItemById = async (userId, id) => {
  const docRef = doc(db, 'users', userId, 'tasks', id);
  const result = await getDoc(docRef);
  return result.data();
}

// DELETE
export const deleteItem = async (userId, id) => {
  const docRef = doc(db, 'users', userId, 'tasks', id);
  await deleteDoc(docRef);
}

export const getTasksByUserId = async (userId) => {
  const colRef = collection(db, 'users', userId, 'tasks');
  const result = await getDocs(colRef);
  return getArrayFromCollection(result);
}

const getArrayFromCollection = (collection) => {
  return collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
}
