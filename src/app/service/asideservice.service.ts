import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideserviceService {
  private asideVisibleSubject = new BehaviorSubject<boolean>(true);
  asideVisible$ = this.asideVisibleSubject.asObservable();

  toggleAside() {
    this.asideVisibleSubject.next(!this.asideVisibleSubject.value);
  }

  open() {
    return true;
  }

  close() {
    return false;
  }
}
