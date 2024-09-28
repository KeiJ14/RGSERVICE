import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideserviceService } from '../service/asideservice.service';
import { HomedashComponent } from './pages/homedash/homedash.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AsideComponent, NavComponent, HomedashComponent, UsuariosComponent, PerfilesComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']  // Corrección: styleUrls en plural
})
export class AdminComponent {
  showSidebar : boolean = true; // Por defecto, el aside es visible
  item: string | null = null;
  modulo: string | null = null;

  constructor(private asideService: AsideserviceService) {}
//ngOntInit() se ejecuta cuando el componente ha sido inicializado completamente
  ngOnInit() {
    // Nos suscribimos a los cambios del estado del sidebar
    this.asideService.getSidebarVisibility().subscribe(visible => {
      this.showSidebar = visible;
    });
    //obtengo el tocken del localstorage
    const item = localStorage.getItem('item');
    const modulo = localStorage.getItem('modulo');
    this.item = item;
    this.modulo = modulo;
    console.log(item);
    console.log(modulo);
  }

  // Método que alterna el estado del sidebar
  toggleSidebar() {
    this.asideService.toggleSidebar(); // Alterna el estado del sidebar
  }


}
