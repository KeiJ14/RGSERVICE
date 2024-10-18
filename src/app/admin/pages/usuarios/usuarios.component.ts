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
    { nombre: 'Email', campo: 'email' },
    { nombre: 'Usuario', campo: 'usuario' },
    { nombre: 'Perfil', campo: 'perfiles' },

  ];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.apiService.GetAPI(headers, 'https://matriz-riezgo.vercel.app/usuarios').subscribe(
      (data) => {
        this.filas = data; // Guarda los datos obtenidos de la API
        this.puedevertabla = true;
      },
      (error) => {
        console.error('Error al cargar los filas', error);
      }
    );
  }
}
