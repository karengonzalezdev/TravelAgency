import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private baseURL = "/AgenciaViajeTA/API/getCities";
  private eliminar = "/AgenciaViajeTA/API/deleteCity/";
  private agregar="AgenciaViajeTA/API/createCity";
  private buscar="/AgenciaViajeTA/API/searchCities";
  private actualizarCiudad = "/AgenciaViajeTA/API/updateCity/";
  private buscarId = "AgenciaViajeTA/API/City/getInformation/";
  constructor(private httpClient: HttpClient) { }
  obtenerListaDeCiudades():Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(`${this.baseURL}`);
  }
  eliminarCiudad(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }
  registrarCiudad(aerolinea:Ciudad) : Observable<Ciudad>{
    return this.httpClient.post<Ciudad>(`${this.agregar}`, aerolinea)
  }
  buscarFiltro(palabra:String): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(`${this.buscar}?name=${palabra}&continentName=${palabra}`);
  }

  actualizar(ciudad:Ciudad, id:number):Observable<Object>{
    return this.httpClient.post(`${this.actualizarCiudad}/${id}`,ciudad)
  }
  obtenerId(id:number) : Observable<Ciudad>{
    return this.httpClient.get<Ciudad>(`${this.buscarId}/${id}`)
  }

}