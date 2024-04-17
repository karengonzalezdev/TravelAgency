import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aerolinea } from 'src/app/models/aerolinea';
import { AerolineaService } from 'src/app/service/aerolinea.service';
@Component({
  selector: 'app-aerolinea',
  templateUrl: './aerolinea.component.html',
  styleUrls: ['./aerolinea.component.css']
})
export class AerolineaComponent implements OnInit {
  aerolineas: Aerolinea[];
  json: String;
  p: number = 1
  total: number = 0;

  constructor(private servicio:AerolineaService, private router:Router) { }
  ngOnInit(): void {
    this.ObtenerLista();
  }

  private ObtenerLista(){
    this.servicio.obtenerListaDeAerolineas().subscribe(dato=>{
       this.aerolineas = dato;
    })
   }
   eliminarAerolinea(id:number){
    let condicion = confirm("¿Estás seguro de eliminar el registro?");
      if(condicion == true){
    this.servicio.eliminarAerolinea(id).subscribe(dato=>{
      console.log(dato);

      alert("Registro Eliminado");
      this.ObtenerLista();
    })
  }
}

    buscar(nombre:String){
      if(nombre == "" ||nombre == null){
        this.ObtenerLista()
      }
      else{
      nombre= nombre.toUpperCase();
      this.servicio.buscarNombre(nombre).subscribe(dato=>{
         this.aerolineas = dato;
         this.json = JSON.stringify(this.aerolineas);
         console.log(this.aerolineas);
      }, err => {
        422
        alert("Aerolínea no encontrada")
      })
    }}
 
    redireccionar(){
      this.router.navigate(['registrar-aerolinea']);
    }

    actualizar(id:number){
      this.router.navigate(['modificar-aerolinea', id]);
    }

    pageChangeEvent(event: number){
      this.p = event;
      this.ObtenerLista();
     }
}
