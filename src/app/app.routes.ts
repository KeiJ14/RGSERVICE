import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoliComponent } from './loli/loli.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loli', component: LoliComponent },

];
