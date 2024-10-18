import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Método para realizar la consulta a la API
  public GetAPI(headers: HttpHeaders, url: string): Observable<any> {
    return this.http.get(url, { headers });
  }
  public DeleteAPI(headers: HttpHeaders, url: string, id: string): Observable<any> {
    return this.http.delete(`${url}/${id}`, { headers });
  }

  // Método para realizar una solicitud POST a la API
  public PostDatos(headers: HttpHeaders, url: string, data: any, metodo: string): Observable<any> {
    return (this.http as any)[metodo.toLowerCase()](`${url}`, data, { headers });
  }
  // Función para actualizar un usuario
  public PatchAPI(headers: HttpHeaders, url: string, id: string, data: any): Observable<any> {
    return this.http.patch(`${url}/${id}`, data, { headers });
  }

}
