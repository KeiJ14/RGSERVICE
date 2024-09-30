import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  // Inicializamos showSidebar en true (aside visible por defecto)
  private navVisibleSubject = new BehaviorSubject<boolean>(true);

  // Método para obtener el estado actual del sidebar
  getNotifiPerfilVisibility() {
    return this.navVisibleSubject.asObservable(); // Devuelve un observable para que otros componentes lo puedan observar
  }
  notificationTab() {
    const currentVisibility = this.navVisibleSubject.value;
    this.navVisibleSubject.next(!currentVisibility); // Cambiamos el estado
  }
}
