import { MenuperfilService } from './../../../service/menuperfil.service';
import { Component, OnInit } from '@angular/core';
import { AsideserviceService } from '../../../service/asideservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']  // Corrección: styleUrls en plural
})
export class NavComponent{
  constructor(private asideService: AsideserviceService, private menuperfilService: MenuperfilService) {}
  menuperfil: boolean = true; // Por defecto, el aside es visible

  //ngOntInit() se ejecuta cuando el componente ha sido inicializado completamente
  ngOnInit() {
    // Nos suscribimos a los cambios del estado del sidebar
    this.menuperfilService.getMenuPerfilVisibility().subscribe(visible => {
      this.menuperfil = visible;
    });
  }

  // Método que alterna el estado del sidebar
  toggleSidebar() {
    this.asideService.toggleSidebar(); // Alterna el estado del sidebar
  }


  toggleMenu() {
    this.menuperfilService.toggleMenuPerfil(); // Alterna el estado del sidebar
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('item');
    localStorage.removeItem('modulo');
    window.location.href = '/login';
  }
}
