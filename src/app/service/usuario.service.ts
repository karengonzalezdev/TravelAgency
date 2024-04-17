import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class usuarioService {

  private buscar = "/AgenciaViajeTA/API/getUsers";
  private eliminar = "/AgenciaViajeTA/API/deleteUser/";
  private agregar="AgenciaViajeTA/API/createUser";
  private modificar="AgenciaViajeTA/API/updateUser/";
  private consultarUsuario="AgenciaViajeTA/API/consultUser/";

  private url = "AgenciaViajeTA/API/getUsersPage?";//paginacion
 
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.buscar}`);
  }

  getUsers(page: number, size: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `page=${page}&size=${size}`);//paginacion
  }

  eliminarUsuarios(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }

  registrarUsuarios(usuarios:Usuario) : Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.agregar}`, usuarios)
  }
  actualizarUsuario(usuario:Usuario, id:number):Observable<Object>{
    return this.httpClient.post(`${this.modificar}/${id}`,usuario);
  }
  obtenerId(id:number) : Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.consultarUsuario}/${id}`)
  }
}