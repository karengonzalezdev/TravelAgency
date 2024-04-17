import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Reservaciones } from 'src/app/models/reservaciones';
import { CuartoService } from 'src/app/service/cuarto.service';
import { ReservacionesService } from 'src/app/service/reservaciones.service';
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['reservaciones.component.css']
})

export class ReservacionesComponent implements OnInit {
  reservations: Reservaciones[];
  prueba:Reservaciones = new Reservaciones()
  cuarto:Cuarto = new Cuarto();
  p: number = 1
  total: number = 0;
  
  constructor(private servicio:ReservacionesService, private router:Router, private cuartService:CuartoService) { }
   ngOnInit(){
        this.ObtenerLista();
   }
   private ObtenerLista(){
    this.servicio.obtenerListaDeClientes().subscribe(dato=>{
       this.reservations = dato;
    })
   }
   eliminarReserva(id:number, idRoom:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
      if(condicion == true){
        this.servicio.eliminarReserva(id).subscribe(dato=>{
          console.log(dato);
          this.cuarto.status = 1;
          this.cuartService.estatusCuarto(this.cuarto, idRoom).subscribe(dato =>{
            alert("Registro Eliminado");
          })
        
          this.ObtenerLista();
        })
      }
  }
  buscarOrigen(palabra:String){
    if(palabra == "" || palabra == null){
      this.ObtenerLista();
    }
    else{
    this.servicio.filtrOrigen(palabra.toUpperCase()).subscribe(dato=>{
       this.reservations = dato;
    },err =>{
      422
      alert("Registro no encontrado")
    })
  }
  }
  redireccionar(){
    this.router.navigate(['buscar-filtro-reservacion']);
  }
  redireccionar2(palabra:String){
    this.router.navigate(['buscar-campo'])
  }
  actualizar(id:number, idRoom:number){
    this.cuarto.status = 1;
    this.cuartService.estatusCuarto(this.cuarto,idRoom).subscribe(dato =>{
      this.router.navigate(['actualizar-reservacion', id]);
    })
  }
  redireccionarAgregar(){
    this.router.navigate(['registrar-reserva']);
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.ObtenerLista();
   }
}
