import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Prueba } from 'src/app/models/prueba';
import { VueloService } from 'src/app/service/vuelo.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['tabla.component.css']
})
export class TablaComponent implements OnInit {

  vuelos: Prueba[];

  @Input()arrayData: any;

  constructor(private servicio:VueloService, private router:Router) { }


  ngOnInit(): void {
  }

  private ObtenerLista(){
    this.servicio.obtenerListaDeVuelos().subscribe(dato=>{
       this.vuelos = dato;
    })
   }
   eliminarVuelo(id:number){
    this.servicio.eliminarVuelo(id).subscribe(dato=>{
      console.log(dato);
      alert("Registro Eliminado");
      this.ObtenerLista();
    })}
}
