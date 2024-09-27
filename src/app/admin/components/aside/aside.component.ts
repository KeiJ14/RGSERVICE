import { Component, OnInit } from '@angular/core';
import { AsideserviceService } from '../../../service/asideservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']  // Corrección: styleUrls en plural
})
export class AsideComponent {
  constructor(public asideService: AsideserviceService) {}

  // Método para alternar la visibilidad del aside
  toggleAside() {
    this.asideService.toggleAside();
    console.log('Aside visible: ', this.asideService.asideVisible$);
  }

  showSidebar : boolean = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
