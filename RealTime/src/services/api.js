import { db, doc, getDoc, getDocs, collection, updateDoc, deleteDoc, query, where, setDoc, onSnapshot } from "./firebase";

const collectionName = 'rooms';

// CREATE
export const createRoom = async (roomId) => {
  const room = await getRoomById(roomId);
  if (room) {
    console.log('Room is already exists');
  }
  else {
    const colRef = collection(db, collectionName);
    await setDoc(doc(colRef, roomId), { 'id': roomId, 'guestIsInRoom': false })
  }
  return roomId;
}

// UPDATE
export const updateRoom = async (roomId, obj) => {
  const docRef = doc(db, 'rooms', roomId);
  await updateDoc(docRef, obj)
}

// Ejemplo de como escucho cuando se actualiza un documento
export const onRoomUpdated = (roomId, callback) =>
  onSnapshot(doc(db, "rooms", roomId), (doc) => {
    console.log("Documento actualizado");
    callback(doc);
  });


// READ
export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

export const getRoomById = async (roomId) => {
  const docRef = doc(db, 'rooms', roomId);
  const result = await getDoc(docRef);
  return result.data();
}


// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('age', '==', value)));
  return getArrayFromCollection(result);
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
