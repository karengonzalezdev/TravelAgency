import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aerolinea } from 'src/app/models/aerolinea';
import { AerolineaService } from 'src/app/service/aerolinea.service';
@Component({
  selector: 'app-registrar-aerolinea',
  templateUrl: './registrar-aerolinea.component.html',
  styleUrls: ['./registrar-aerolinea.component.css']
})
export class RegistrarAerolineaComponent implements OnInit {

  aerolinea:Aerolinea = new Aerolinea();
  numeros="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
  i=0;
  constructor(private aerolineaServicio:AerolineaService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarAerolinea(){
   /* if(this.aerolinea.name == null || this.aerolinea.name.length>50){
      alert("El Nombre es requerido con 50 caracteres máximo");
    }
    else */if(this.tieneNumeros(this.aerolinea.name)==1)
    {
      alert("El Nombre no debe incluir espacios, caracteres numéricos y/o especiales");
    }
    else{
      this.aerolinea.name= this.aerolinea.name.toUpperCase();
    this.aerolineaServicio.registrarAerolinea(this.aerolinea).subscribe(dato=>{
      console.log(dato);
      this.irAlistaAerolineas();
      alert("Aerolínea Registrada");
    }, error => {
      "La Aerolínea ya está registrada.";
      alert("La Aerolínea ya está registrada.");
  });
  }
  }
  irAlistaAerolineas(){
    this.router.navigate(['aerolineas-listar'])
  }

  onSubmit(){
    this.guardarAerolinea();
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




