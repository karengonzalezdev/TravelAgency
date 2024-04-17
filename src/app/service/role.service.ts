import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rolpermiso } from '../models/rolpermiso';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private buscar = "/AgenciaViajeTA/API/getRole";
  private eliminar = "/AgenciaViajeTA/API/deleteRole";
  private agregar="AgenciaViajeTA/API/createRole";
  private consultaRole = "/AgenciaViajeTA/API/consultRole";
  private actualizaRole ="/AgenciaViajeTA/API/updateRole";

  private agregarRolePermiso="/AgenciaViajeTA/API/createRolePerm";
  private rolesPerm="/AgenciaViajeTA/API/getRolePerm";
  private eliminarPermisoRol = "/AgenciaViajeTA/API/deleteRolePerm";
  private actualizaRolePerm = "/AgenciaViajeTA/API/updateRolePerm";
  private buscaRolPer= "/AgenciaViajeTA/API/consultRolePerm";
 

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeRole():Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.buscar}`);
  }

  eliminarRoles(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }
 
  registrarRoles(role:Role) : Observable<Role>{
    return this.httpClient.post<Role>(`${this.agregar}`, role)
  }
  regisistarRolePermiso(rolePermiso:Rolpermiso): Observable<Rolpermiso>{
    return this.httpClient.post<Rolpermiso>(`${this.agregarRolePermiso}`, rolePermiso)
  }
  
  obtenerListaDeRolePerm():Observable<Rolpermiso[]>{
    return this.httpClient.get<Rolpermiso[]>(`${this.rolesPerm}`);
  }

  eliminarRolePerm(idRol:number){
    return this.httpClient.delete(`${this.eliminarPermisoRol}/${idRol}`)
  }
  obtenerId(id:number) : Observable<Role>{
    return this.httpClient.get<Role>(`${this.consultaRole}/${id}`)
  }
  actualizarRole(role:Role, id:number):Observable<Object>{
    return this.httpClient.post(`${this.actualizaRole}/${id}`,role);
  }

  actualizarRolePerm(rolePerm:Rolpermiso, id:number):Observable<Object>{
    return this.httpClient.post(`${this.actualizaRolePerm}/${id}`,rolePerm);
  }

  obtenerIdRolPer(id:number) : Observable<Rolpermiso>{
    return this.httpClient.get<Rolpermiso>(`${this.buscaRolPer}/${id}`)
  }
}