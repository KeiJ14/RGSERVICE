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
 menuseguridad: string = "dashboard"; // Por defecto, el aside es visible
 estadomenu: string = "false"; // Por defecto, el aside es visible
 showmenuseguridad(select : string, estado : string) {
   this.menuseguridad = select;
   this.estadomenu = estado;
 }

 selectedItem: string | null = null;

 selectItem(item: string, modulo: string) {
  localStorage.setItem('item', item);
  localStorage.setItem('modulo', modulo);
  this.selectedItem = item;
}
}
