import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  ciudades:Ciudad[];
  json: String;
  constructor(private servicio:CiudadService, private router:Router) { }
  ngOnInit(): void {
    this.ObtenerLista();
  }

  private ObtenerLista(){
    this.servicio.obtenerListaDeCiudades().subscribe(dato=>{
       this.ciudades = dato;
    })
   }
   eliminarAerolinea(id:number){
    let condicion = confirm("¿Estás seguro de eliminar el registro?");
      if(condicion == true){
    this.servicio.eliminarCiudad(id).subscribe(dato=>{
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
    this.servicio.buscarFiltro(nombre).subscribe(dato=>{
       this.ciudades = dato;
       this.json = JSON.stringify(this.ciudades);
       console.log(this.ciudades);
    }, err => {
      422
      alert("Ciudad no encontrada")
    })
  }}

  redireccionar(){
    this.router.navigate(['registrar-ciudad']);
  }

  actualizar(id:number){
    this.router.navigate(['modificar-ciudad', id]);
  }

}



 