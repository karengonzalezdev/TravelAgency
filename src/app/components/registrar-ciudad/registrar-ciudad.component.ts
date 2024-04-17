import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';
@Component({
  selector: 'app-registrar-ciudad',
  templateUrl: './registrar-ciudad.component.html',
  styleUrls: ['./registrar-ciudad.component.css']
})
export class RegistrarCiudadComponent implements OnInit {

  ciudad:Ciudad = new Ciudad();
  numeros="0123456789!@#$%&/()=?¡+*{}[_-]'\"";
  i=0;
  constructor(private ciudadServicio:CiudadService, private router:Router) { }

  ngOnInit(): void {
  }
   
  guardarCiudad(){
    if(this.ciudad.name == null || this.ciudad.name.length>50){
      alert("El Nombre es requerido con 50 caracteres máximo");
    }
    else if(this.ciudad.continen_name == null || this.ciudad.continen_name.length>50){
      alert("El continente es requerido con 50 caracteres máximo");
    }
    else if(this.tieneNumeros(this.ciudad.name)==1)
    {
      alert("El nombre no puede contener caracteres numéricos y/o especiales");
    }
    else{
      this.ciudad.name= this.ciudad.name.toUpperCase();
    this.ciudadServicio.registrarCiudad(this.ciudad).subscribe(dato=>{
      console.log(dato);
      this.irAlistaCiudades();
      alert("Ciudad Registrada");
    }, error => {
      "La ciudad ya está registrada.";
      alert("La ciudad ya está registrada.");
  });
  }
}
  irAlistaCiudades(){
    this.router.navigate(['ciudades-listar'])
  }

  onSubmit(){
    this.guardarCiudad();
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
