import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerolinea } from 'src/app/models/aerolinea';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';
import { CiudadComponent } from '../ciudad/ciudad.component';
@Component({
  selector: 'app-modificar-ciudad',
  templateUrl: './modificar-ciudad.component.html',
  styleUrls: ['./modificar-ciudad.component.css']
})
export class ModificarCiudadComponent implements OnInit {
  ciudad=  new Ciudad();
  id:number;
  ciudades: Ciudad[];
  ciudad2: Ciudad = new Ciudad();
  numeros="0123456789!@#$%&/()=?¡+*{}[_-]'\"";
  i=0;
  constructor(private ciudadServicio:CiudadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.ciudad2= new Ciudad();
    this.ciudadServicio.obtenerId(this.id).subscribe(dato=>{
      this.ciudad2=dato;
      console.log(this.ciudad)
    })
  }

  actualizar(){
    if(this.ciudad2.name == null || this.ciudad2.name==""){
      alert("El Nombre es requerido");
    }
    else if(this.ciudad2.continen_name == null){
      alert("El continente es requerido");
    }
    else if(this.tieneNumeros(this.ciudad2.name)==1)
    {
      alert("El nombre no debe incluir caracteres numéricos y/o especiales");
    }
    else{
      this.ciudad2.name= this.ciudad2.name.toUpperCase();
    this.ciudadServicio.actualizar(this.ciudad2, this.id).subscribe(dato=>{
      console.log(dato);
      this.irAListaGeneral();
      alert("Registro Actualizado");
    }, error => console.log(error));
  }}

  irAListaGeneral(){
    this.router.navigate(['ciudades-listar']);
  }
  onSubmit(){
    this.actualizar();
  }
  tieneNumeros(texto:String){
    for(this.i=0; this.i<texto.length; this.i++){
       if (this.numeros.indexOf(texto.charAt(this.i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
}
