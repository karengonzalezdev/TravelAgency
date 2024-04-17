import { Injectable } from '@angular/core';
import { Prueba } from '../models/prueba';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from '../models/aerolinea';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  private baseURL = "/AgenciaViajeTA/API/getFlights";
  private eliminar = "/AgenciaViajeTA/API/deleteFlight/";
  private agregar="AgenciaViajeTA/API/createFlight";
  private obtenerAerolineas = "/AgenciaViajeTA/API/getAirlines";
  private obtenerCiudades = "/AgenciaViajeTA/API/getCities";
  private buscarDestino = "/AgenciaViajeTA/API/searchFlightsCityDestination";
  private buscarAerolinea = "/AgenciaViajeTA/API/searchFlightsAirline"
  private buscarOrigen = "/AgenciaViajeTA/API/searchFlightsCityOrigin"
  private actualizarVuelo = "/AgenciaViajeTA/API/updateFlight/";
  private actualizarStatus = "/AgenciaViajeTA/API/updateStatusFlight/";
  private buscarId = "AgenciaViajeTA/API/Flight/getInformation";
  
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeVuelos():Observable<Prueba[]>{
    return this.httpClient.get<Prueba[]>(`${this.baseURL}`);
  }
  eliminarVuelo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
  }
  
 
  registrarVuelo(vuelo:Prueba) : Observable<Prueba>{
  return this.httpClient.post<Prueba>(`${this.agregar}`, vuelo)
}

listarAerolineas():Observable<Aerolinea[]>{
  return this.httpClient.get<Aerolinea[]>(`${this.obtenerAerolineas}`);
}
listarCiudades():Observable<Ciudad[]>{
  return this.httpClient.get<Ciudad[]>(`${this.obtenerCiudades}`);
}

filtroDestino(destino:String){
  return this.httpClient.get<Prueba[]>(`${this.buscarDestino}?cityDestination=${destino}`)
}
filtroOrigen(origen:String){
 return this.httpClient.get<Prueba[]>(`${this.buscarOrigen}?cityOrigin=${origen}`)
}
filtroAerolinea(aerolinea:String){
 return this.httpClient.get<Prueba[]>(`${this.buscarAerolinea}?airline=${aerolinea}`)
}

actualizar(vuelo:Prueba, id:number):Observable<Object>{
  return this.httpClient.post(`${this.actualizarVuelo}/${id}`,vuelo)
}
obtenerId(id:number) : Observable<Prueba>{
  return this.httpClient.get<Prueba>(`${this.buscarId}/${id}`)
}

actualizarEstatus(vuelo:Prueba, id:number):Observable<Object>{
  return this.httpClient.post(`${this.actualizarStatus}/${id}`,vuelo)
}
}

