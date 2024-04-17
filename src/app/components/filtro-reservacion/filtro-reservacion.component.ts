import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservaciones } from 'src/app/models/reservaciones';
import { ReservacionesService } from 'src/app/service/reservaciones.service';
@Component({
  selector: 'app-filtro-reservacion',
  templateUrl: './filtro-reservacion.component.html',
  styleUrls: ['./filtro-reservacion.component.css']
})
export class FiltroReservacionComponent implements OnInit {
  reservations: Reservaciones[];
  constructor(private servicio:ReservacionesService, private router:Router, private route:ActivatedRoute) { }
  palabra:String;
  ngOnInit(): void {
      this.palabra = this.route.snapshot.params['palabra'];
       this.buscarOrigen(this.palabra);
  }
  private ObtenerLista(){
    this.servicio.obtenerListaDeClientes().subscribe(dato=>{
       this.reservations = dato;
    })
   }
  eliminarReserva(id:number){
    this.servicio.eliminarReserva(id).subscribe(dato=>{
      console.log(dato);
      alert("Registro Eliminado");
      this.ObtenerLista();
    })
  }
  buscarOrigen(palabra:String){
    this.servicio.filtrOrigen(palabra).subscribe(dato=>{
       this.reservations = dato;
       console.log(this.reservations);
    })
  }
}
