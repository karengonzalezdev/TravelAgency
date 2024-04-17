import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permisos } from 'src/app/models/permisos';
import { PermisoService } from 'src/app/service/permiso.service';

@Component({
  selector: 'app-permiso-consultar',
  templateUrl: './permiso-consultar.component.html',
  styleUrls: ['./permiso-consultar.component.css']
})
export class PermisoConsultarComponent implements OnInit {

  permiso: Permisos[];
  p: number = 1
  total: number = 0;

  constructor(private servicePerm:PermisoService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerLista();
  }

  private ObtenerLista(){
    this.servicePerm.obtenerListaDePermisos().subscribe(dato=>{
       this.permiso = dato;
    })
   }
   eliminarPermiso(id:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
      if(condicion == true){
        this.servicePerm.eliminarPermisos(id).subscribe(dato=>{
          console.log(dato);
          alert("Registro Eliminado");
          this.ObtenerLista();
        })
      }
    }

    irAeditarPermiso(id:number){
      this.router.navigate(['editar-permiso',id])
    }

    pageChangeEvent(event: number){
      this.p = event;
      this.ObtenerLista();
     }
}
