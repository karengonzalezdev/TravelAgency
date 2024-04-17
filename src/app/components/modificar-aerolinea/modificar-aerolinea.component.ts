import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerolinea } from 'src/app/models/aerolinea';
import { AerolineaService } from 'src/app/service/aerolinea.service';

@Component({
  selector: 'app-modificar-aerolinea',
  templateUrl: './modificar-aerolinea.component.html',
  styleUrls: ['./modificar-aerolinea.component.css']
})
export class ModificarAerolineaComponent implements OnInit {
  aerolinea = new Aerolinea();
  id:number;
  aerolineas : Aerolinea[];
  aerolinea2 : Aerolinea = new Aerolinea();
  numeros="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
  i=0;
  constructor(private aerolineaServicio:AerolineaService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.aerolinea2= new Aerolinea();
    this.aerolineaServicio.obtenerId(this.id).subscribe(dato=>{
      this.aerolinea2=dato;
      console.log(this.aerolinea)
    })
  }
 
  actualizar(){
    /*if(this.aerolinea2.name == null || this.aerolinea2.name==""){
      alert("El Nombre es requerido");
    }
    else*/ if(this.tieneNumeros(this.aerolinea2.name)==1)
    {
      alert("El Nombre no puede contener espacios, caracteres numéricos y/o especiales");
    }
    else{
      this.aerolinea2.name= this.aerolinea2.name.toUpperCase();
    this.aerolineaServicio.actualizarAerolinea(this.aerolinea2, this.id).subscribe(dato=>{
      console.log(dato);
      this.irAListaGeneral();
      alert("Registro Actualizado");
    }, error => console.log(error));
  }}

  irAListaGeneral(){
    this.router.navigate(['aerolineas-listar']);
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


  
  
