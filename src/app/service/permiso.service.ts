import { Injectable } from '@angular/core';
import { Permisos } from '../models/permisos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PermisoService {
  private buscar = "/AgenciaViajeTA/API/getPermission";
  private eliminar = "/AgenciaViajeTA/API/deletePermission";
  private agregar="/AgenciaViajeTA/API/createPermission";
  private consulta="/AgenciaViajeTA/API/consultPermission";
  private actuaiza= "/AgenciaViajeTA/API/updatePermission";

  constructor(private httpClient: HttpClient) { }
  obtenerListaDePermisos():Observable<Permisos[]>{
    return this.httpClient.get<Permisos[]>(`${this.buscar}`);
  }

  eliminarPermisos(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }

  registrarPermisos(permisos:Permisos) : Observable<Permisos>{
    return this.httpClient.post<Permisos>(`${this.agregar}`, permisos)
  }

  obtenerIdPermiso(id:number) : Observable<Permisos>{
    return this.httpClient.get<Permisos>(`${this.consulta}/${id}`)
  }

  actualizarPermiso(permiso:Permisos, id:number):Observable<Object>{
    return this.httpClient.post(`${this.actuaiza}/${id}`,permiso);
  }
}