import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Usuario } from 'src/app/models/usuario';
import { RoleService } from 'src/app/service/role.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario()
  rol:Role = new Role()
  id:number;
  rolesGenerales:Role[];
  constructor(private route:ActivatedRoute, private usuarioService:usuarioService, private router:Router, private roleService:RoleService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioService.obtenerId(this.id).subscribe(dato =>{
      this.usuario = dato;
    })
    this.listarRoles();
  }
   actualizarUsuario(){
    /*if(this.usuario.name == null){
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
      alert("El campo nombre tiene numeros o caracteres raros");
    }else if(this.valNumeros(this.usuario.lastnameDad)== 1){
      alert("El campo apellido paterno tiene numeros o caracteres raros");
    }else if(this.valNumeros(this.usuario.lastnameMom)== 1){
      alert("El campo appellido materno tiene numeros o caracteres raros");
    }else if(this.valToken(this.usuario.token)== 1){
      alert("El campo token tiene caracteres raros");
    }else{
    this.usuario.rolDto = this.rol;
    this.usuario.name = this.usuario.name.toUpperCase();
    this.usuario.lastnameDad = this.usuario.lastnameDad.toUpperCase();
    this.usuario.lastnameMom = this.usuario.lastnameMom.toUpperCase();
    this.usuario.token = this.usuario.token.toUpperCase();
    this.usuarioService.actualizarUsuario(this.usuario, this.id).subscribe(dato =>{
      alert("Usuario modificado");
      this.irALista();
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

   irALista(){
    this.router.navigate(['consultar-usuario']);
   }
   listarRoles(){
    this.roleService.obtenerListaDeRole().subscribe(dato =>{
      this.rolesGenerales = dato;
    });
  }
  onSubmit(){
    this.actualizarUsuario();
  }

  redireccionar(){
    this.router.navigate(['consultar-usuario']);
  }
}
