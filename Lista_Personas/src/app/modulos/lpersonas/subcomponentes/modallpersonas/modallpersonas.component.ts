import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modallpersonas',
  standalone: true,
  imports: [],
  templateUrl: './modallpersonas.component.html'
})
export class ModallpersonasComponent {
  @Input() modalid: string = 'modallpersonas';
  
  @Input() persona = {
      id: 0,
      nombres: '',
      edad: 0,
      email: '',
      telefono: ''
    };
    
    @Output() eventoGuardar = new EventEmitter();
  
    guardar() {
      if (this.validarGuardar()) {
        this.eventoGuardar.emit(this.persona);
        this.cerrarModal();
      }
    }
  
    validarGuardar(): boolean {
      if (this.validarEstaVacio(this.persona.id)) {
        this.mostrarMensajeError("El id de la persona no se ha agregado");
        return false;
      }
  
      if (this.validarEstaVacio(this.persona.nombres)) {
        this.mostrarMensajeError("El nombre de la personas no se ha agregado");
        return false;
      }
  
      if (this.validarEstaVacio(this.persona.email)) {
        this.mostrarMensajeError("El email de la personas no se ha agregado");
        return false;
      }
  
      return true;
    }
  
    cerrarModal() {
      const btnCerrar = document.getElementById('btnCerrarModal');
      if (btnCerrar) {
        btnCerrar.click();
      }
    }
  
    validarEstaVacio(value: any): boolean {
      return !value || value.trim().length === 0;
    }
  
    mostrarMensajeError(message: string) {
      this.mostrarMensajeBase(message, 'danger');
    }
  
    mostrarMensajeExito(message: string) {
      this.mostrarMensajeBase(message, 'success');
    }
  
    mostrarMensajeAlerta(message: string) {
      this.mostrarMensajeBase(message, 'warn');
    }
  
    mostrarMensajeBase(message: string, type: string) {
      const alertPlaceholder = document.getElementById('divMensaje');
      if (alertPlaceholder) {
        // Remove any existing messages before adding new one
        alertPlaceholder.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
          <div class="alert alert-${type} alert-dismissible" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        alertPlaceholder.appendChild(wrapper);
      }
    }
}
