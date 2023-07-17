import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

console.log("URL: ", URL)
export const socket = io(URL, {
    autoConnect: false,
    withCredentials: true
});