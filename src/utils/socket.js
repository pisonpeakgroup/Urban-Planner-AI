// src/utils/socket.js
import { io } from 'socket.io-client';
export const socket = io('ws://localhost:3001');

// Usage in component
socket.on('update', (data) => {
  console.log('Real-time update:', data);
});
