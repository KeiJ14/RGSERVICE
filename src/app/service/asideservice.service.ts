import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideserviceService {
  // Inicializamos showSidebar en true (aside visible por defecto)
  private asideVisibleSubject = new BehaviorSubject<boolean>(true);

  // Método para obtener el estado actual del sidebar
  getSidebarVisibility() {
    return this.asideVisibleSubject.asObservable(); // Devuelve un observable para que otros componentes lo puedan observar
  }

  // Método para alternar el estado de showSidebar
  toggleSidebar() {
    const currentVisibility = this.asideVisibleSubject.value;
    this.asideVisibleSubject.next(!currentVisibility); // Cambiamos el estado
  }
}
