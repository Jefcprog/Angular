import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loginlpersonas',
  standalone: true,
  imports: [],
  templateUrl: './loginlpersonas.component.html'
})
export class LoginlpersonasComponent {


  constructor(){
  }


  @Output()
  banderaAutenticacion = new EventEmitter<string>();

  @Output() loginEvent = new EventEmitter();

  @Input()
  valorData?: string;

  labelLogin: string = 'LOGIN';
  emailusuario: string = ''; // two way binging
  passwordusuario: string = '';

  mostrarNombre() {
  }

  eventoCambioPantalla(){
    this.banderaAutenticacion.emit("REGISTRO");
  }

  login() {
    this.loginEvent.emit();
  }
}