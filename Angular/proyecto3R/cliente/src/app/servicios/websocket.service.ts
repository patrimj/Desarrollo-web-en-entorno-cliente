import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket,SocketIoConfig } from 'ngx-socket-io';

import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket?:any
   
  constructor() {
   this.socket = io('http://localhost:3000/')
   this.socket.on('connect', () => {
    console.log('conectado')
  })
  this.socket.on('disconnect', () => {
    console.log("Desconectado");
  });
  this.socket.on("message", () => {
    console.log('Message from server: '+'hola');
  });
   
  }
  
    
  
 

}
  
 
 
  

