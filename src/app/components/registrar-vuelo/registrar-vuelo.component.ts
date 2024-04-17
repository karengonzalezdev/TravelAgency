import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { Prueba } from 'src/app/models/prueba';
import { Ciudad } from 'src/app/models/ciudad';
import { Aerolinea } from 'src/app/models/aerolinea';
import { VueloService } from 'src/app/service/vuelo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registrar-vuelo',
  templateUrl: './registrar-vuelo.component.html',
  styleUrls: ['./registrar-vuelo.component.css']
})
export class RegistrarVueloComponent implements OnInit {

  vuelos: Prueba[];
  ciudades: Ciudad[];
  aerolineas: Aerolinea[];
  ciudadO : Ciudad = new Ciudad();
  ciudadD : Ciudad = new Ciudad();
  aerolinea : Aerolinea = new Aerolinea();
  vuelo : Prueba = new Prueba();
  numeros="!@#$%&/()=?¡+*{}[_]'\"";
  i=0;
  date: Date= new Date();
 


  constructor(private vueloServicio:VueloService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerListaAerolineas();
    this.obtenerListaCiudades();
    
    
  }

  guardarVuelo(){
    const despegue=new DatePipe('en-US');
    let formatoD= despegue.transform(this.vuelo.departureTime,"mm")
    let formatoA= despegue.transform(this.vuelo.arrivalTime,"mm")
    let formatoHD= despegue.transform(this.vuelo.departureTime,"hh")
    let formatoHA= despegue.transform(this.vuelo.arrivalTime,"hh")
    let formatoDD= despegue.transform(this.vuelo.departureTime,"yyyy-MM-dd")
    let formatoDA= despegue.transform(this.vuelo.arrivalTime,"yyyy-MM-dd")
    console.log(formatoD);
    this.vuelo.fkIdAirline= this.aerolinea
    this.vuelo.fkIdCitieOrigin=this.ciudadO
    this.vuelo.fkIdCitieDestination= this.ciudadD
    if(this.vuelo.code == null || this.vuelo.code.length>20){
      alert("El Código es requerido con 20 caracteres máximo");
    }
    else if(this.vuelo.cost == null || this.vuelo.cost.toString().length>12){
      alert("El costo es requerido con 12 caracteres máximo");
    }
    else if(this.vuelo.arrivalTime == null){
      alert("El aterrizaje es requerido");
    }
    else if(this.vuelo.departureTime == null){
      alert("El despegue es requerido");
    }
    else if(this.vuelo.fkIdAirline== null){
      alert("La aerolínea es requerida");
    }
    else if(this.vuelo.fkIdCitieOrigin == null){
      alert("La ciudad de origen es requerida");
    }
    else if(this.vuelo.fkIdCitieOrigin==this.vuelo.fkIdCitieDestination)
    {
      alert("La ciudad de destino no puede ser la misma que la de origen");
    }
    else if(this.vuelo.fkIdCitieDestination == null){
      alert("La ciudad de destino es requerida");
    }
    else if(this.vuelo.arrivalTime<=this.vuelo.departureTime)
    {
      alert("La fecha y hora de aterrizaje no puede ser antes o igual del despegue ")
    }
    else if(this.vuelo.arrivalTime<this.vuelo.departureTime)
    {
      alert("La fecha y hora de despegue no puede ser antes de la fecha actual")
    }
    
    else if(Number(formatoA)-Number(formatoD)<20 && Number(formatoHA)==Number(formatoHD) && formatoDD==formatoDA)
    {
      alert("El rango mínimo entre despegue y aterrizaje es de 20 minutos")
    }
    else if(this.tieneNumeros(this.vuelo.code)==1)
    {
      alert("El código no debe contener caracteres especiales")
    }
    else if(this.vuelo.cost<=0)
    {
      alert("El costo no debe ser un valor negativo o 0")
    }
    else{
    this.vueloServicio.registrarVuelo(this.vuelo).subscribe(dato=>{
      console.log(dato);
      this.irAlistaVuelos();
      alert("Vuelo Registrado");
    }, error => {
      "El vuelo ya está registrado.";
      alert("El vuelo ya está registrado.");
  });
  }
}
  irAlistaVuelos(){
    this.router.navigate(['vuelos-listar'])
  }

  onSubmit(){
    this.guardarVuelo();
  }
  private obtenerListaAerolineas(){
    this.vueloServicio.listarAerolineas().subscribe(dato=>{
       this.aerolineas = dato;
    })
   }

   private obtenerListaCiudades(){
    this.vueloServicio.listarCiudades().subscribe(dato=>{
       this.ciudades = dato;
    })
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



