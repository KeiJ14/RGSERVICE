import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GettablaComponent } from "../../components/gettabla/gettabla.component";
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, GettablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  filas: any[] = [];  // Aquí se guardarán los datos obtenidos de la API
  puedevertabla: boolean = false;

  columnas = [
    { nombre: 'DNI', campo: 'dni' },
    { nombre: 'Nombre', campo: 'nombre' },
    { nombre: 'Apellido', campo: 'apellido' },
    { nombre: 'Email', campo: 'email' }
  ];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.apiService.consultarAPI(headers, 'https://matriz-riezgo.vercel.app/usuarios').subscribe(
      (data) => {
        this.filas = data; // Guarda los datos obtenidos de la API
        this.puedevertabla = true;
        console.log(this.filas);
      },
      (error) => {
        console.error('Error al cargar los filas', error);
      }
    );
  }
  // Función para editar una fila
  editarFila(fila: any): void {
    console.log('Editar fila:', fila);
    // Aquí puedes abrir un modal o navegar a otra página para editar
  }

  // Función para eliminar una fila
  eliminarFila(fila: any): void {
    console.log('Eliminar fila:', fila);
    // Aquí puedes hacer una lógica para eliminar la fila, como mostrar un mensaje de confirmación
  }
}
