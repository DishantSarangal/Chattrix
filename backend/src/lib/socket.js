import {server} from "socket.io";
import http from "http";
import express from "express";


const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
    }
});
// used to store online user
const userSocketMap = {}; // {userId : socketId}


io.on("connection" , (socket)=>{
    console.log("A user connected",socket.io);


    socket.on("disconnected",()=>{
        console.log("A User disconnected",socket.id);
    })
})
export {io , server ,app};