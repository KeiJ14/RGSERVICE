import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Método para realizar la consulta a la API
  public consultarAPI(headers: HttpHeaders, url: string): Observable<any> {
    return this.http.get(url, { headers });
  }
  // public consultarAPIID(headers: HttpHeaders, url: string, id: string, metodo: string): Observable<any> {
  //   return (this.http as any)[metodo.toLowerCase()](`${url}/${id}`, { headers });
  // }

  // Método para realizar una solicitud POST a la API
  public enviarDatos(headers: HttpHeaders, url: string, data: any, metodo: string): Observable<any> {
    return (this.http as any)[metodo.toLowerCase()](`${url}`, data, { headers });
  }

}
