import { Server } from 'socket.io';
import express from 'express';

const app = express();
const io = new Server({
  cors: {
    origin: "http://localhost:5173"
  }
});

io.listen(4000);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message-from-front', (text) => {
    console.log('message from front', text);
    io.emit('message-from-back', text);
  });
});