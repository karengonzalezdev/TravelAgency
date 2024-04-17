import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ciudad } from "../models/ciudad";
import { Cuarto } from "../models/cuarto";
import { Hotel } from "../models/hotel";

@Injectable({
    providedIn: 'root'
})
export class HotelService {
    private baseURL = "/AgenciaViajeTA/API/listarHoteles";
    private crear = "/AgenciaViajeTA/API/createHotel";
    private buscarHotelPorCampo = "AgenciaViajeTA/API/getHotelByCamp";
    private buscarId = "/AgenciaViajeTA/API/getHotel";
    private buscarNameHotel = "/AgenciaViajeTA/API/getHotelByName";
    private buscarCodeHotel = "/AgenciaViajeTA/API/getHotelByCode";
    private buscarCity = "/AgenciaViajeTA/API/getHotelByCity";
    private actualizarHotel = "/AgenciaViajeTA/API/updateHotel";
    private eliminar = "/AgenciaViajeTA/API/deleteHotel";
    private listarRoom = "/AgenciaViajeTA/API/listarCuartos";
    private updateEstatusHotel = "/AgenciaViajeTA/API/updateHotelStatus";
    private obtenerCiudades = "/AgenciaViajeTA/API/getCities";
    
    constructor(private httpClient: HttpClient){}
    obtenerListaDeHoteles():Observable<Hotel[]>{
        return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
    }

    filtroHotel(palabra:string): Observable<Hotel[]>{
       //return this.httpClient.get<Hotel[]>(`${this.buscarHotelPorCampo}?idHotel=${palabra}&nameHotel=${palabra}&codeHotel=${palabra}&city=${palabra}`);
       return this.httpClient.get<Hotel[]>(`${this.buscarHotelPorCampo}?city=${palabra}`);
    }
    filtroidHotel(idHotel:number){
        return this.httpClient.get<Hotel[]>(`${this.buscarId}?idHotel=${idHotel}`)
    }
    filtroNameHotel(nameHotel:string){
        return this.httpClient.get<Hotel[]>(`${this.buscarNameHotel}?nameHotel=${nameHotel}`)
    }
    filtroCodeHotel(codeHotel:string){
        return this.httpClient.get<Hotel[]>(`${this.buscarCodeHotel}?codeHotel=${codeHotel}`)
    }
    filtroCity(city:string){
        return this.httpClient.get<Hotel[]>(`${this.buscarCity}?city=${city}`)
    }

    crearHotel(hotel:Hotel) : Observable<Hotel>{
        return this.httpClient.post<Hotel>(`${this.crear}`, hotel)
    }
    actualizar(hotel:Hotel, id:number) : Observable<Object>{
        return this.httpClient.post(`${this.actualizarHotel}/${id}`,hotel)
    }
    eliminarHotel(id:number):Observable<Object>{
        return  this.httpClient.delete(`${this.eliminar}/${id}`);
    }
    listarRooms():Observable<Cuarto[]>{
        return this.httpClient.get<Cuarto[]>(`${this.listarRoom}`);
    }
    estatusHotel(hotel2:Hotel, idHotel:number):Observable<Object>{
        return this.httpClient.post(`${this.updateEstatusHotel}/${idHotel}`,hotel2)
    }
    obtenerId(id:number) : Observable<Hotel>{
        return this.httpClient.get<Hotel>(`${this.buscarId}/${id}`)
    }
    post(url:string, body){
        return this.httpClient.post(url,body);
    }
    listarCiudades():Observable<Ciudad[]>{
        return this.httpClient.get<Ciudad[]>(`${this.obtenerCiudades}`);
      }
}