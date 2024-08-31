import { Component } from '@angular/core';
import { PersonaDetail } from '../../datasource/lpersonas.interface';
import { listapersonas } from '../../datasource/dataejemplo';

@Component({
  selector: 'app-lpersonas',
  standalone: true,
  imports: [],
  templateUrl: './lpersonas.component.html'
})
export class LpersonasComponent {

  lpersonas: PersonaDetail[] = listapersonas;

  selectPerson: PersonaDetail;

  constructor() {
    this.selectPerson = this.initializeProduct();
  }

  private initializeProduct(): PersonaDetail {
    return {
      id: 0,
      nombres: '',
      edad: 0,
      email: '',
      telefono: ''
    };
  }

  selectedPerson(persona: PersonaDetail): void {
    this.selectPerson = { ...persona };
  }

  agregarPersona(): void {
    this.selectPerson = this.initializeProduct();
  }

  guardarpersona(persona: PersonaDetail): void {
    if (persona.id === 0) {
      persona.id = this.lpersonas.length > 0 
        ? Math.max(...this.lpersonas.map(p => p.id)) + 1 
        : 1;
      this.lpersonas.push(persona);
    } else {
      this.actualizarpersona(persona);
    }
  }

  funcionEliminar(persona: PersonaDetail): void {
    if (confirm(`¿Estás seguro de que deseas eliminar la persona ${persona.nombres}?`)) {
      this.lpersonas = this.lpersonas.filter(p => p.id !== persona.id);
      alert(`La persona ${persona.nombres} ha sido eliminada.`);
    }
  }

  private actualizarpersona(persona: PersonaDetail): void {
    const index = this.lpersonas.findIndex(p => p.id === persona.id);
    if (index !== -1) {
      this.lpersonas[index] = persona;
    } else {
      console.error('Persona no encontrada para actualización');
    }
  }

  funcionExample(): void {
    console.log(this.lpersonas.toString());
  }

  funcionpersona(persona: PersonaDetail): void {
    console.log(persona);
  }
}
