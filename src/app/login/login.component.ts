import { ApiService } from './../api/api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  //para ver que cargue li login
  loading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private ApiService: ApiService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Cambiado a 'usuario'
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = {
        usuario: this.loginForm.get('username')?.value, // 'usuario' en lugar de 'username'
        password: this.loginForm.get('password')?.value
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.loadingLogin();
      console.log(credentials);
      this.ApiService.enviarDatos(headers, 'https://matriz-riezgo.vercel.app/auth', credentials, 'POST').subscribe(
        (response: any) => {
          // Guardar el token en localStorage
          const Token = response.token;
          localStorage.setItem('token', Token);
          this.loadingLoginFalse();
          this.router.navigate(['/admin']);
        },
        (error) => {
          this.loadingLoginFalse();
          console.error('Login failed', error);
          alert(`Error: ${error.error.message}`);
        }
      );
    } else {
      alert('Form is invalid');
    }
  }

  //mi funcion para cotrolar el loading
  loadingLogin() {
    this.loading = true;
  }
  loadingLoginFalse() {
    this.loading = false;
  }
}

