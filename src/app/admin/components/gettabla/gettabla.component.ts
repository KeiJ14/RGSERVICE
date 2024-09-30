import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gettabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gettabla.component.html',
  styleUrl: './gettabla.component.css'
})
export class GettablaComponent implements OnInit {
  @Input() columnas: { nombre: string, campo: string }[] = [];
  @Input() filas: any[] = [];
  @Input() puedeVerTabla: boolean = true;
  datos: any[] = [];
  @Input() editarFila!: (fila: any) => void;  // Función para editar
  @Input() eliminarFila!: (fila: any) => void;  // Función para eliminar

  
  ngOnInit(): void{
    console.log('columnas:', this.filas);
    this.datos=this.filas;
  }
}
