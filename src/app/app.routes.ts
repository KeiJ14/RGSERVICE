import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];
