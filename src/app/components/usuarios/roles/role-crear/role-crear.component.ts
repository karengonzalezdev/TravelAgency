import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permisos } from 'src/app/models/permisos';
import { Role } from 'src/app/models/role';
import { Rolpermiso } from 'src/app/models/rolpermiso';
import { PermisoService } from 'src/app/service/permiso.service';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-crear',
  templateUrl: './role-crear.component.html',
  styleUrls: ['./role-crear.component.css']
})
export class RoleCrearComponent implements OnInit {

  role:Role= new Role();
  rolePermiso :Rolpermiso = new Rolpermiso();
  variablePermiso : Permisos = new Permisos();
  roleGenerales: Role[];
  permisoGeneral:Permisos[];
 
  constructor(private roleService:RoleService, private router:Router, private permiso:PermisoService) { }

  ngOnInit(): void {
    this.listarPermisos();
  }

  onSubmit(
  ){
    this.registrarRole()
  }

  registrarRole(){
    /*if(this.role.tipoRole == null){
      alert("Role necesario");
    }else if(this.variablePermiso.idPermission == null){
      alert("Permiso necesarios");
    }else if(this.role.tipoRole.length > 20){
      alert("Role muy largo");
    }else*/ if(this.valRole(this.role.tipoRole)== 1){
      alert("El campo role tiene numeros, espacio o caracteres raros");
    }else{
      this.roleService.registrarRoles(this.role).subscribe(dato =>{
      this.rolePermiso.fk_idPermission = this.variablePermiso.idPermission;
      this.rolePermiso.roleDTO = dato;
      this.rolePermiso.roleDTO.tipoRole = this.rolePermiso.roleDTO.tipoRole.toUpperCase();
      this.rolePermiso.permissionDTO = this.variablePermiso;
      this.rolePermiso.fk_idRole = this.rolePermiso.roleDTO.idRole;
      this.roleService.regisistarRolePermiso(this.rolePermiso).subscribe(dato =>{
        this.rolePermiso = dato;
        alert("Registro Exitoso")
        this.redireccionar()
      });
      }, err =>{
        422
        alert("El Role ya existe");
      });
    }
  }
  
  valRole(texto:String){
    var caracteres="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
    for(let i=0; i < texto.length; i++){
      if(caracteres.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }

  listarRoles(){
    this.roleService.obtenerListaDeRole().subscribe(dato=>{
       this.roleGenerales = dato
    })
  }

  listarPermisos(){
    this.permiso.obtenerListaDePermisos().subscribe(dato =>{
      this.permisoGeneral = dato;
    })
  }

  redireccionar(){
    this.router.navigate(['consulta-role']);
  }
  redireccionarCrearPermiso(){
    this.router.navigate(['registro-permiso']);
  }

}