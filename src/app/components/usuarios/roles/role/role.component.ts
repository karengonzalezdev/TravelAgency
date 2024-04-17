import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Rolpermiso } from 'src/app/models/rolpermiso';
import { RoleService } from 'src/app/service/role.service'; 

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  role:Role[];
  roleper: Rolpermiso[];
  p: number = 1
  total: number = 0;

  constructor(private servicio:RoleService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerRolesPermisos();
  }
  private ObtenerLista(){
    this.servicio.obtenerListaDeRole().subscribe(dato=>{
       this.role = dato;
    })
   }
   private obtenerRolesPermisos(){
    this.servicio.obtenerListaDeRolePerm().subscribe(dato =>{
      this.roleper = dato;
    })
   }
   eliminarRole(id:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
      if(condicion == true){
        this.servicio.eliminarRoles(id).subscribe(dato=>{
          console.log(dato);
          alert("Registro Eliminado");
          this.ObtenerLista();
        })
      }
  }

  eliminarGeneral(id:number, idRol:number){
    this.servicio.eliminarRolePerm(idRol).subscribe(dato =>{
      this.servicio.eliminarRoles(id).subscribe(dato =>{
        alert("Registro eliminado");
        this.obtenerRolesPermisos()
      })
    })
  }
  redireccionar(){
    this.router.navigate(['consulta-role'])
  }
  actualizaRole(id:number, idRolePerm:number){
    this.router.navigate(['editar-role', id,idRolePerm]);
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.obtenerRolesPermisos();
   }
}
