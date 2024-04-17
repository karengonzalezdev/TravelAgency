import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permisos } from 'src/app/models/permisos';
import { PermisoService } from 'src/app/service/permiso.service';
 
@Component({
  selector: 'app-permiso-crear',
  templateUrl: './permiso-crear.component.html',
  styleUrls: ['./permiso-crear.component.css']
})
export class PermisoCrearComponent implements OnInit {

  permisos:Permisos= new Permisos();

  constructor(private permisoService:PermisoService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.guardarPermiso();
  }

  guardarPermiso(){
    /*if(this.permisos.description == null){
      alert("Permiso necesario");
    }else if(this.permisos.nodo == null){
      alert("Nodo necesarios");
    }else if(this.permisos.description.length > 100){
      alert("Permiso muy largo");
    }else if(this.permisos.nodo.length > 5){
      alert("Nodo muy largo");
    }else*/ if(this.valPerm(this.permisos.description)== 1){
      alert("El campo permiso tiene numeros, espacio o caracteres raros");
    }else if(this.valNodo(this.permisos.nodo)== 1){
        alert("El campo nodo tiene letras, espacio o caracteres raros");
    }else{
      this.permisos.description = this.permisos.description.toUpperCase();
      this.permisos.nodo = this.permisos.nodo.toUpperCase();
    this.permisoService.registrarPermisos(this.permisos).subscribe(dato =>{
      console.log(dato);
      this.irAregistroRoles();
      alert("Permiso registrado");
    }, error => console.log(error)); 
  }
  }

  valPerm(texto:String){
    var caracteres="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
    for(let i=0; i < texto.length; i++){
      if(caracteres.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }

  valNodo(texto:String){
    var caracteres="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%&/()=?¡+*{}[_-],'' '\"";
    for(let i=0; i < texto.length; i++){
      if(caracteres.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }
 
  irAregistroRoles(){
    this.router.navigate(['registro-role'])
  }
}
