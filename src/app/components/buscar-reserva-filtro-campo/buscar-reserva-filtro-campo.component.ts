import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Reservaciones } from 'src/app/models/reservaciones';
import { ReservacionesService } from 'src/app/service/reservaciones.service';

@Component({
  selector: 'app-buscar-reserva-filtro-campo',
  templateUrl: './buscar-reserva-filtro-campo.component.html',
  styleUrls: ['./buscar-reserva-filtro-campo.component.css']
})
export class BuscarReservaFiltroCampoComponent implements OnInit {
  reservations: Reservaciones[];
  activo = true;
  json: String;
  p: number = 1
  total: number = 0;
  constructor(private servicio:ReservacionesService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerLista()
  }
  private ObtenerLista(){
    this.servicio.obtenerListaDeClientes().subscribe(dato=>{
       this.reservations = dato;
    })
   }

   eliminarReserva(id:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
      if(condicion == true){
        this.servicio.eliminarReserva(id).subscribe(dato=>{
          console.log(dato);
          
          alert("Registro Eliminado");
          this.ObtenerLista();
        })
      }
    
  }
  buscarDestino(destino:String){
    if(destino == "" ||destino == null){
      this.ObtenerLista()
    }
    this.servicio.filtroDestio(destino.toUpperCase()).subscribe(dato=>{
       this.reservations = dato;
       this.json = JSON.stringify(this.reservations);
       console.log(this.reservations);
    }, err => {
      422
      if(destino != "" || destino != null){
      alert("Destino no encontrado")
      }
    })
  }

  buscarAerolinea(aerolinea:String){
    if(aerolinea == "" ||aerolinea == null){
      this.ObtenerLista()
    }
    this.servicio.filtroAerolinea(aerolinea.toUpperCase()).subscribe(dato=>{
       this.reservations = dato;
       console.log(this.reservations);
    }, err =>{
      422
      if(aerolinea != "" || aerolinea != null){
      alert("Aerolinea no encontrada");
      }
    })
  }
  buscarOrigenCampo(origen:String){
    if(origen == "" || origen == null){
      this.ObtenerLista()
    }
    this.servicio.filtroOrigenCampo(origen.toUpperCase()).subscribe(dato=>{
       this.reservations = dato;
       console.log(this.reservations);
    }, err =>{
      422
      if(origen != "" && origen != null){
        alert("Origen no encontrado");
      }
    })
  }
  buscarHotel(hotel:String){
    if(hotel == "" || hotel == null){
      this.ObtenerLista()
    }
    this.servicio.filtroHotel(hotel.toUpperCase()).subscribe(dato=>{
       this.reservations = dato;
       console.log(this.reservations);
    }, err =>{
      422
      if(hotel != "" || hotel != null){
      alert("Hotel no encontrado");
      }
    })
  }
  actualizar(id:number){
    this.router.navigate(['actualizar-reservacion', id]);
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.ObtenerLista();
   }
}
