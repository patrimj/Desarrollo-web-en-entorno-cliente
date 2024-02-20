import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { resolve, dirname } from "path";

import { PORT } from "./config.js";
import cors from "cors";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
   cors: {
     origin: "http://localhost:4200",
     methods: ["*"],
     allowedHeaders: [""],
     credentials: true 
    },
});

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(resolve("frontend/dist")));

io.on("connection", (socket) => {
  console.log('Conectado el usuario',socket.id);

  // Manejar mensajes generales debido al broadcast
  socket.on("message", (body) => {
    console.log(body);
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8),
    });
  
 
  });

  // Manejar mensajes privados 
  
});

server.listen(PORT);
console.log(`server on port ${PORT}`);
