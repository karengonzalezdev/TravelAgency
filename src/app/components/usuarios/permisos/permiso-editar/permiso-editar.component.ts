import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Permisos } from 'src/app/models/permisos';
import { PermisoService } from 'src/app/service/permiso.service';

@Component({
  selector: 'app-permiso-editar',
  templateUrl: './permiso-editar.component.html',
  styleUrls: ['./permiso-editar.component.css']
})
export class PermisoEditarComponent implements OnInit {
  permisos:Permisos= new Permisos();
  id:number;

  constructor(private route:ActivatedRoute,private permisoService:PermisoService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.permisoService.obtenerIdPermiso(this.id).subscribe(dato =>{
      this.permisos = dato;
  })
  }

  guardarPermiso(){
    if(this.permisos.description == null){
      alert("Permiso necesario");
    }else if(this.permisos.nodo == null){
      alert("Nodo necesarios");
    }else if(this.permisos.description.length > 100){
      alert("Permiso muy largo");
    }else if(this.permisos.nodo.length > 5){
      alert("Nodo muy largo");
    }else if(this.valPerm(this.permisos.description)== 1){
      alert("El campo permiso tiene numeros o caracteres raros");
    }else{
      this.permisos.description = this.permisos.description.toUpperCase();
      this.permisos.nodo = this.permisos.nodo.toUpperCase();
    this.permisoService.actualizarPermiso(this.permisos, this.id).subscribe(dato =>{
      alert("Usuario modificado");
      this.iraPermisos();
    });
  }
  }
 
  valPerm(texto:String){
    var caracteres="0123456789!@#$%&/()=?¡+*{}[_-].,'\"";
    for(let i=0; i < texto.length; i++){
      if(caracteres.indexOf(texto.charAt(i),0)!=-1){
        return 1;
      }
    }
    return 0;
  }
 
  
  iraPermisos(){
    this.router.navigate(['consulta-permiso']);
  }

  onSubmit(){
    this.guardarPermiso();
    
  }

}
