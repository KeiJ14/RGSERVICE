import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gettabla',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './gettabla.component.html',
  styleUrl: './gettabla.component.css'
})
export class GettablaComponent implements OnInit {
  @Input() columnas: { nombre: string, campo: string }[] = [];
  @Input() filas: any[] = [];
  @Input() puedeVerTabla: boolean = true;
  datos: any[] = [];

  editandoFila: any = null; // Fila que está siendo editada
  mostrarFormularioEdicion: boolean = false; // Controla si mostramos o no el formulario de edición

  constructor(private apiService: ApiService) {}

// Función para emitir el evento de edición
onEditar(fila: any) {
  console.log('Fila a editar:', fila);  // Verificar si la fila tiene datos correctos
  if (fila) {
    this.editandoFila = { ...fila };  // Clonamos la fila seleccionada para evitar modificarla directamente
    this.mostrarFormularioEdicion = true;  // Mostramos el formulario de edición
  } else {
    console.error('No se encontró la fila para editar');
  }
}

// Función para emitir el evento de eliminación
onEliminar(fila: any) {
  console.log('Eliminar fila:', fila);
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = 'https://matriz-riezgo.vercel.app/usuarios'; // Cambia esta URL si es necesario

  // Confirmación antes de eliminar
  if (confirm('¿Estás seguro que deseas eliminar este usuario?')) {
    this.apiService.DeleteAPI(headers, url, fila.id).subscribe(
      () => {
        // Filtra la fila eliminada de la tabla
        this.filas = this.filas.filter(f => f.id !== fila.id);
        window.location.reload();
        console.log('Usuario eliminado correctamente');
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }
}

  ngOnInit(): void{
    this.datos=this.filas;
    console.log(this.columnas);
    console.log(this.editandoFila);
  }
  guardarEdicion(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = 'https://matriz-riezgo.vercel.app/usuarios';  // URL para la API

    this.apiService.PatchAPI(headers, url, this.editandoFila.id, this.editandoFila).subscribe(
      (response) => {
        // Actualizamos la fila editada en la tabla
        const index = this.filas.findIndex(f => f.id === this.editandoFila.id);
        if (index !== -1) {
          this.filas[index] = { ...this.editandoFila };
        }

        this.mostrarFormularioEdicion = false;  // Ocultamos el formulario de edición
        this.editandoFila = null;  // Limpiamos la fila en edición
        console.log('Usuario actualizado correctamente');
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  cancelarEdicion(): void {
    this.mostrarFormularioEdicion = false;  // Ocultamos el formulario de edición
    this.editandoFila = null;  // Limpiamos la fila en edición
  }
}
