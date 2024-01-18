import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UsuarioInterface } from '../interfaces/interfacesTodas';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent  {
  profileForm = new FormGroup({
    id: new FormControl({value: '1', disabled: true}),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    nick: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
   });

  //ACCEDER A LOS VALORES DE FORMGROUP
  handleSubmit() {
    this.crearUsuario();
    console.log('Datos Creados');
  }

  crearUsuario() {

    var usuario: UsuarioInterface = {
      id: 1 || 0, 
      nombre: this.profileForm.value.nombre || '',
      apellidos: this.profileForm.value.apellidos || '',
      nick: this.profileForm.value.nick || '',
      email: this.profileForm.value.email || '',
      password: this.profileForm.value.password   || '',
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    const serializedObj = localStorage.getItem('usuario');
    if (serializedObj) {
      const usuarioJSON = JSON.parse(serializedObj) as UsuarioInterface;
      console.log(usuarioJSON);
    }
  }
}

