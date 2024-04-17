import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Aerolinea } from 'src/app/models/aerolinea';
import { AerolineaService } from 'src/app/service/aerolinea.service';

@Component({
  selector: 'app-buscar-aerolinea',
  templateUrl: './buscar-aerolinea.component.html',
  styleUrls: ['./buscar-aerolinea.component.css']
})
export class BuscarAerolineaComponent implements OnInit {
  aerolineas: Aerolinea[];
  json:string;
  constructor(private servicio:AerolineaService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerLista()
  }

  private ObtenerLista(){
    this.servicio.obtenerListaDeAerolineas().subscribe(dato=>{
       this.aerolineas = dato;
    })
   }

   eliminarAerolinea(id:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
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
    this.servicio.buscarNombre(nombre).subscribe(dato=>{
       this.aerolineas = dato;
       this.json = JSON.stringify(this.aerolineas);
       console.log(this.aerolineas);
    }, err => {
      422
      alert("Aerolínea no encontrada")
    })
  }

}
