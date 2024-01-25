import { Component, Inject, OnInit } from '@angular/core';

import { Persona } from '../../interfaces/interfacesaplicacion';
import { PersonaNormal } from '../../clases/todas-las-clases';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule
} from '@angular/material/dialog';


@Component({
  selector: 'app-confirmar',
  standalone: true,
  imports: [],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
  
})

export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: PersonaNormal) { }

  ngOnInit(): void {
  }

  iniciar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }
}