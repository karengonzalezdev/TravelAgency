import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Usuario } from 'src/app/models/usuario';
import { RoleService } from 'src/app/service/role.service';
import { usuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit{

  usuario:Usuario= new Usuario();
  rol:Role = new Role();
  rolesGenerales:Role[];
  //search = '';


  constructor(private usuarioService:usuarioService, private router:Router, private roleService:RoleService, private formBuilder: FormBuilder, private sanitizer:DomSanitizer) { 
  }

  ngOnInit(){
    this.listarRoles();
  }
 
  guardarUsuario(){
   /* if(this.usuario.name == null){
      alert("Usuario necesario");
    }else if(this.usuario.lastnameDad == null){
      alert("Apellido paterno necesarios");
    }else if(this.usuario.lastnameMom == null){
      alert("Appeliido materno necesarios");
    }else if(this.rol.idRole == null){
      alert("Role necesario");
    }else if(this.usuario.token== null){
      alert("Token necesario");
    }else if(this.usuario.name.length > 50){
      alert("Nombre de usuario muy largo");
    }else if(this.usuario.lastnameDad.length > 50){
      alert("Apellido paterno de usuario muy largo");
    }else if(this.usuario.lastnameMom.length > 50){
      alert("Apellido materno de usuario muy largo");
    }else if(this.usuario.token.length > 20){
      alert("Token de usuario muy largo");
    }else*/ if(this.valNumeros(this.usuario.name)== 1){
      alert("El campo nombre tiene numeros, espacio o caracteres raros");
    }else if(this.valNumeros(this.usuario.lastnameDad)== 1){
      alert("El campo apellido paterno tiene numeros, espacio o caracteres raros");
    }else if(this.valNumeros(this.usuario.lastnameMom)== 1){
      alert("El campo appellido materno tiene numeros, espacio o caracteres raros");
    }else if(this.valToken(this.usuario.token)== 1){
      alert("El campo token tiene espacio o caracteres raros");
    }else{
    this.usuario.rolDto = this.rol;
    this.usuario.name = this.usuario.name.toUpperCase();
    this.usuario.lastnameDad = this.usuario.lastnameDad.toUpperCase();
    this.usuario.lastnameMom = this.usuario.lastnameMom.toUpperCase();
    this.usuario.token = this.usuario.token.toUpperCase();
    this.usuarioService.registrarUsuarios(this.usuario).subscribe(dato =>{
      alert("Usuario registrado")
      this.redireccionar()
    });
  }
  }

  valNumeros(texto:String){
    var numeros="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
    for(let i=0; i < texto.length; i++){
      if(numeros.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }
  
  valToken(texto:String){
    var caracteres="!@#$%&/()=?¡+*{}[_-],.'' '\"";
    for(let i=0; i < texto.length; i++){
      if(caracteres.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }

  onSubmit(){
      this.guardarUsuario();
  }
  listarRoles(){
    this.roleService.obtenerListaDeRole().subscribe(dato =>{
      this.rolesGenerales = dato;
    })
  }
  redireccionar(){
    this.router.navigate(['consultar-usuario'])
  }
  
}

