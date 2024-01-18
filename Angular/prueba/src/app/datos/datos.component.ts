import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UsuarioInterface } from '../interfaces/interfacesUsuario';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  profileForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    nick: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    puntos: new FormControl('0'),
  });

  //ACCEDER A LOS VALORES DE FORMGROUP
  handleSubmit() {
    this.crearUsuario();
    console.log('Datos Creados');
  }

  crearUsuario() {
    const usuario = new Usuario(
      4, 
      this.profileForm.value.nombre || '',
      this.profileForm.value.apellidos || '',
      this.profileForm.value.nick || '',
      this.profileForm.value.email || '',
      this.profileForm.value.password   || '',
      0  
    );

    localStorage.setItem('usuario', JSON.stringify(usuario));
    const serializedObj = localStorage.getItem('usuario');
    if (serializedObj) {
      const usuario = JSON.parse(serializedObj) as UsuarioInterface;
      console.log(usuario);
    }
  }
}

