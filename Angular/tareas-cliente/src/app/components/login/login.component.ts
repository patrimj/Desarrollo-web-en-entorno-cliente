import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { FormsModule } from '@angular/forms';
import { validar } from './validaciones';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], //IMPORTANTISIMO. Si queremos que los formularios funcionen
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login';
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {

    //MENSAJES DE VALIDACION
    const mensajeValidado = validar(this.email, this.password);
    if (mensajeValidado) {
      this.mensaje = mensajeValidado;
      return;
    }

    this.authService.login(this.email, this.password).subscribe(

      data => {
        if (data && data.token) {
          this.mensaje = 'Usuario logueado';
        }
      },
      error => {
        this.mensaje = 'Error, usuario no encontrado';

      }
    );
  }

}
