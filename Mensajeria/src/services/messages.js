import { db, collection, addDoc } from './firebase';

const collectionName = 'messages'


// CREATE
export const createMsg = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
}