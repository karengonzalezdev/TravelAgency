import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
//import { Router } from '@angular/router';
import { Prueba } from 'src/app/models/prueba';
import { VueloService } from 'src/app/service/vuelo.service';
import { ModificarVueloComponent } from '../modificar-vuelo/modificar-vuelo.component';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit{
vuelos: Prueba[];
id:number;
vuelo: Prueba= new Prueba();
vuelo2= new Prueba();
json: String;
mensajeRespuesta:String;
p: number = 1
total: number = 0;

constructor(private servicio:VueloService, private router:Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.ObtenerLista();
  }
   
  private ObtenerLista(){
   
    this.servicio.obtenerListaDeVuelos().subscribe(dato=>{
       this.vuelos = dato;
       console.log('this.vuelos',this.vuelos);
    })
   }
   eliminarVuelo(id:number){
    let condicion = confirm("¿Estás seguro de eliminar el registro?");
      if(condicion == true){
    this.servicio.eliminarVuelo(id).subscribe(dato=>{
      console.log(dato);
      this.ObtenerLista();
      this.mensajeRespuesta=JSON.stringify(dato);
      if (this.mensajeRespuesta.match("El vuelo tiene reservaciones registradas"))
      {
        alert("El vuelo tiene reservaciones registradas");
      }
      else{
      alert("Registro Eliminado");
      }
    })
    
  }
}
    buscarOrigen(origen:String){
      if(origen == "" ||origen == null){
        this.ObtenerLista()
      }
      else{
      origen= origen.toUpperCase();
      this.servicio.filtroOrigen(origen).subscribe(dato=>{
         this.vuelos = dato;
         this.json = JSON.stringify(this.vuelos);
         console.log(this.vuelos);
      }, err => {
        422
        alert("No existen vuelos con el origen")
      })
    }}
    buscarDestino(destino:String){
      if(destino == "" ||destino == null){
        this.ObtenerLista()
      }
      else{
      destino= destino.toUpperCase();
      this.servicio.filtroDestino(destino).subscribe(dato=>{
         this.vuelos = dato;
         this.json = JSON.stringify(this.vuelos);
         console.log(this.vuelos);
      }, err => {
        422
        alert("No existen vuelos con el destino")
      })
    }}
    buscarAerolinea(aerolinea:String){
      if(aerolinea == "" ||aerolinea == null){
        this.ObtenerLista()
      }
      else{
      aerolinea= aerolinea.toUpperCase();
      this.servicio.filtroAerolinea(aerolinea).subscribe(dato=>{
         this.vuelos = dato;
         this.json = JSON.stringify(this.vuelos);
         console.log(this.vuelos);
      }, err => {
        422
        alert("No existen vuelos de ela aerolínea")
      })
    }}
    redireccionarRegistro(){
      this.router.navigate(['registrar-vuelo']);
    }

    redireccionarCiudades(){
      this.router.navigate(['ciudades-listar']);
    }

    actualizar(id:number){
      this.router.navigate(['modificar-vuelo', id]);
    }
    status(id:number){
      let condicion = confirm("¿Cambiar estatus de vuelo?");
      if(condicion == true){
      if(this.vuelo2.status==1){
       
      this.vuelo2.status=0;}
      else{
        this.vuelo2.status=1;
      }
      this.servicio.actualizarEstatus(this.vuelo2,id).subscribe(dato=>{
        console.log(dato);
        alert("Estatus Actualizado");
        this.ObtenerLista();
      })}
    }

    pageChangeEvent(event: number){
      this.p = event;
      this.ObtenerLista();
     }
    
}


