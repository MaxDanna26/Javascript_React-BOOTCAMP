import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:4000');

export const useSocket = () => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {

    const handleMessage =
      (data) => {
        setMensajes(prev => [...prev, data]);
      }

    socket.on('connect', () => {
      console.log('connected')
      socket.on('message-from-back', handleMessage);
    })
  }, [])


  return { mensajes };
}

export const handleSubmit = (msj) => {
  console.log('enviado')
  socket.emit('message-from-front', msj)
}