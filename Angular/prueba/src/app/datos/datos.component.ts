import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


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
  });

  //ACCEDER A LOS VALORES DE FORMGROUP
  handleSubmit() {
    alert(
      'Nombre:' + this.profileForm.value.nombre +  ' , ' + 'Email:' + this.profileForm.value.email +  ' , ' + 'Nick:' + this.profileForm.value.nick +  ' , ' + 'Apellidos:' + this.profileForm.value.apellidos
    );
  }
}

