import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permisos } from 'src/app/models/permisos';
import { Role } from 'src/app/models/role';
import { Rolpermiso } from 'src/app/models/rolpermiso';
import { PermisoService } from 'src/app/service/permiso.service';
import { RoleService } from 'src/app/service/role.service';
 
@Component({
  selector: 'app-role-editar',
  templateUrl: './role-editar.component.html',
  styleUrls: ['./role-editar.component.css']
})
export class RoleEditarComponent implements OnInit {
 
  role:Role= new Role();
  id:number;
  idRolePerm: number;
  rolePermiso :Rolpermiso = new Rolpermiso();
  variablePermiso : Permisos = new Permisos();
  roleGenerales: Role[];
  permisoGeneral:Permisos[];
  rolPermisoNuevo : Rolpermiso = new Rolpermiso();

  constructor(private route:ActivatedRoute, private roleService:RoleService, private router:Router, private permiso:PermisoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.idRolePerm= this.route.snapshot.params['idRolePerm'];
    this.role = new Role();
    this.roleService.obtenerIdRolPer(this.idRolePerm).subscribe(dato =>{
      this.rolePermiso = dato;
     });
    this.roleService.obtenerId(this.id).subscribe(dato =>{
    this.role = dato;
    });
    this.listarPermisos();
 }

  actualizarRole(){
    this.role = this.rolePermiso.roleDTO;
    this.role.tipoRole = this.role.tipoRole.toUpperCase();
    this.roleService.actualizarRole(this.role, this.id).subscribe(dato =>{
      alert("Role modificado");
      this.actualizarRolePerm();
      this.irALista();
    });
  }

  actualizarRolePerm(){
    this.rolePermiso.roleDTO = this.rolePermiso.roleDTO;
    this.rolePermiso.permissionDTO = this.variablePermiso;
    this.rolePermiso.fk_idPermission = this.variablePermiso.idPermission;
    this.rolePermiso.fk_idRole = this.rolePermiso.roleDTO.idRole;
    this.roleService.actualizarRolePerm(this.rolePermiso, this.idRolePerm).subscribe(dato =>{})
  }
  irALista(){
    this.router.navigate(['consulta-role']);
   }
  listarPermisos(){
    this.permiso.obtenerListaDePermisos().subscribe(dato =>{
      this.permisoGeneral = dato;
    })
  }
 
  onSubmit(){
    /*if(this.role.tipoRole == null){
      alert("Role necesario");
    }else*/ if(this.variablePermiso.idPermission == null){
      alert("Permiso necesarios");
    }else if(this.valRole(this.rolePermiso.roleDTO.tipoRole)== 1){
      alert("El campo role tiene numeros, espacio o caracteres raros");
      /*}else if(this.role.tipoRole.length > 20){
      alert("Role muy largo");*/
    }else{
    //this.actualizarRolePerm();
    this.actualizarRole();
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
}
