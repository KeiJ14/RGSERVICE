import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideserviceService } from '../service/asideservice.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AsideComponent, NavComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']  // Corrección: styleUrls en plural
})
export class AdminComponent {

}
