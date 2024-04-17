import { Injectable } from '@angular/core';
import { Reservaciones } from '../models/reservaciones';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cuarto } from '../models/cuarto';
import { Prueba } from '../models/prueba';
@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {
  private baseURL = "/AgenciaViajeTA/API/listar";
  private eliminar = "/AgenciaViajeTA/API/eliminarReservacion/";
  private filtro = "/AgenciaViajeTA/API/buscarPorCampo";
  private agregar = "/AgenciaViajeTA/API/AgregarReserva";
  private listar = "/AgenciaViajeTA/API/listarCuartos";
  private vuelos = "/AgenciaViajeTA/API/getFlights";
  private buscarDestino = "/AgenciaViajeTA/API/buscarDestino";
  private buscarAerolinea = "/AgenciaViajeTA/API/buscarAerolinea"
  private buscarOrigenCampo = "/AgenciaViajeTA/API/buscarOrigen"
  private buscarHotel = "/AgenciaViajeTA/API/buscarHotel"
  private actualizarReserva = "/AgenciaViajeTA/API/modificarResrvacion/"
  private buscarId = "AgenciaViajeTA/API/getInformationReservaciones/"
  constructor(private httpClient: HttpClient) { }
  obtenerListaDeClientes():Observable<Reservaciones[]>{
    return this.httpClient.get<Reservaciones[]>(`${this.baseURL}`);
  }
  eliminarReserva(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminar}/${id}`);
}
filtrOrigen(palabra:String): Observable<Reservaciones[]>{
  return this.httpClient.get<Reservaciones[]>(`${this.filtro}?origen=${palabra}&destino=${palabra}&hotel=${palabra}&aerolinea=${palabra}`);
}
filtroDestio(destino:String){
  return this.httpClient.get<Reservaciones[]>(`${this.buscarDestino}?nombre=${destino}`)
}
filtroOrigenCampo(origen:String){
 return this.httpClient.get<Reservaciones[]>(`${this.buscarOrigenCampo}?nombre=${origen}`)
}
filtroAerolinea(aerolinea:String){
 return this.httpClient.get<Reservaciones[]>(`${this.buscarAerolinea}?nombre=${aerolinea}`)
}
filtroHotel(hotel:String){
  return this.httpClient.get<Reservaciones[]>(`${this.buscarHotel}?nombre=${hotel}`)
}
registrarReserva(reserva:Reservaciones) : Observable<Reservaciones>{
  return this.httpClient.post<Reservaciones>(`${this.agregar}`, reserva)
}

listarCuartos():Observable<Cuarto[]>{
  return this.httpClient.get<Cuarto[]>(`${this.listar}`);
}
listarVuelos():Observable<Prueba[]>{
  return this.httpClient.get<Prueba[]>(`${this.vuelos}`);
}
actualizarReservacion(reservaciones:Reservaciones, id:number):Observable<Object>{
  return this.httpClient.post(`${this.actualizarReserva}/${id}`, reservaciones)
}
obtenerId(id:number) : Observable<Reservaciones>{
  return this.httpClient.get<Reservaciones>(`${this.buscarId}/${id}`)
}
}
