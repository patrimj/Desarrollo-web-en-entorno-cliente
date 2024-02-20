import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WebSocketService } from './servicios/websocket.service';
import * as io from 'socket.io-client';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AudioService } from './servicios/audio.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  req = false
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  jugadorActual: 'X' | 'O' = 'X';
  ganador: string | null = null;
   constructor(private websocket: WebSocketService,private audioService: AudioService){}
  
  ngOnInit(): void {
     
  }

  enviarMensaje(){
    const messageToSend = "Hola, amigo";
    this.websocket.socket.emit("message", messageToSend);
  }
  //Método Mover
  mover(row: number, col: number): void {

  }

  playSound() {
    this.audioService.playSound('sonido.mp3');
  }

  //Comprobar Ganador
  checkWinner(row: number, col: number): boolean {
    return true
  }

  //Método para comprobar que se han rellenado todas las casillas.
  estaLLeno():boolean{
    return false
  }

  //Método que buscar usuarios que están conectados
  buscarRival(){

  }

  verRequisitos(){
    this.req = true
    this.playSound()
  }
  ocultarRequisitos(){
    this.req = false
  }
}
