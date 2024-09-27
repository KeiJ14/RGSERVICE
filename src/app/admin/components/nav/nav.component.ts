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
  constructor(private asideService: AsideserviceService) {}

  toggleAside() {
    this.asideService.toggleAside(); // Alterna la visibilidad
  }
}
