import { Injectable } from '@angular/core';
import { Aerolinea } from '../models/aerolinea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AerolineaService {
  private baseURL = "/AgenciaViajeTA/API/getAirlines";
  private eliminar = "/AgenciaViajeTA/API/deleteAirline/";
  private agregar="AgenciaViajeTA/API/createAirline";
  private buscar = "/AgenciaViajeTA/API/searchAirlines";
  private actualizarAerolineas = "/AgenciaViajeTA/API/updateAirline/"
  private buscarId = "AgenciaViajeTA/API/getInformation/"
  constructor(private httpClient: HttpClient) { }
  obtenerListaDeAerolineas():Observable<Aerolinea[]>{
    return this.httpClient.get<Aerolinea[]>(`${this.baseURL}`);
  }
  eliminarAerolinea(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }
  registrarAerolinea(aerolinea:Aerolinea) : Observable<Aerolinea>{
    return this.httpClient.post<Aerolinea>(`${this.agregar}`, aerolinea)
  }
  buscarNombre(nombre:String){
    return this.httpClient.get<Aerolinea[]>(`${this.buscar}?name=${nombre}`)
  }
  actualizarAerolinea(aerolinea:Aerolinea, id:number):Observable<Object>{
    return this.httpClient.post(`${this.actualizarAerolineas}/${id}`,aerolinea)
  }
  obtenerId(id:number) : Observable<Aerolinea>{
    return this.httpClient.get<Aerolinea>(`${this.buscarId}/${id}`)
  }
}
