import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cuarto } from "../models/cuarto";
import { Hotel } from "../models/hotel";
@Injectable({
    providedIn: 'root'
})
export class CuartoService {
    private baseURL = "/AgenciaViajeTA/API/listarCuartos";
    private crear = "/AgenciaViajeTA/API/createRoom";
    private buscarCuartoPorCampo = "/AgenciaViajeTA/API/getRoomByCamp";
    private buscarNameRoom = "/AgenciaViajeTA/API/getRoomByName";
    private buscarCodeRoom = "/AgenciaViajeTA/API/getRoomByCode";
    private actualizar = "/AgenciaViajeTA/API/updateRoom";
    private eliminar = "/AgenciaViajeTA/API/deleteRoom";
    private listarHotel = "/AgenciaViajeTA/API/listarHoteles";
    private updateEstatusCuarto = "/AgenciaViajeTA/API/updateRoomStatus";
    private buscarPorId = "/AgenciaViajeTA/API/getRoom";
    private buscarPorIdHotel = "/AgenciaViajeTA/API/getRoomByIdHotel";

    constructor(private httpClient: HttpClient){}
    obtenerListaDeCuartos():Observable<Cuarto[]>{
        return this.httpClient.get<Cuarto[]>(`${this.baseURL}`);
    }
    filtroCuarto(word:string): Observable<Cuarto[]>{
        return this.httpClient.get<Cuarto[]>(`${this.buscarCuartoPorCampo}?nameRoom=${word}&codeRoom=${word}`);
    }
    filtroNameRoom(nameRoom:string){
        return this.httpClient.get<Cuarto[]>(`${this.buscarNameRoom}?nameRoom=${nameRoom}`)
    }
    filtroCodeRoom(codeRoom:string){
        return this.httpClient.get<Cuarto[]>(`${this.buscarCodeRoom}?codeRoom=${codeRoom}`)
    }
    actualizarCuarto(cuarto:Cuarto, id:number) : Observable<Object>{
        return this.httpClient.post<Cuarto>(`${this.actualizar}/${id}`, cuarto)
    }
    eliminarCuarto(id:number):Observable<Object>{
        return  this.httpClient.delete(`${this.eliminar}/${id}`);
    }
    listarHoteles():Observable<Hotel[]>{
        return this.httpClient.get<Hotel[]>(`${this.listarHotel}`);
    }
    estatusCuarto(cuarto2:Cuarto, idRoom:number):Observable<Object>{
        return this.httpClient.post(`${this.updateEstatusCuarto}/${idRoom}`,cuarto2)
    }
    obtenerIdRoom(idRoom:number) : Observable<Cuarto>{
        return this.httpClient.get<Cuarto>(`${this.buscarPorId}/${idRoom}`)
      }
      obtenerRoomByHotel(id:number){
        //return this.httpClient.get<Cuarto[]>(`${this.buscarPorIdHotel}?=${id}`)
        return this.httpClient.get<Cuarto[]>(`${this.buscarPorIdHotel}/${id}`)
      }
      
    crearCuarto(cuarto:Cuarto, id:number) : Observable<Cuarto>{
        return this.httpClient.post<Cuarto>(`${this.crear}/${id}`, cuarto)
    }
}