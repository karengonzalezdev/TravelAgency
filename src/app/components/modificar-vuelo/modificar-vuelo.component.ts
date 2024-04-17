import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { Aerolinea } from 'src/app/models/aerolinea';
import { Prueba } from 'src/app/models/prueba';
import { VueloService } from 'src/app/service/vuelo.service';
import { Subscriber } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modificar-vuelo',
  templateUrl: './modificar-vuelo.component.html',
  styleUrls: ['./modificar-vuelo.component.css']
})
export class ModificarVueloComponent implements OnInit {
  vuelo = new Prueba();
  id:number;
  vuelos: Prueba[];
  aerolineas: Aerolinea[];
  ciudades: Ciudad[];
  aerolinea: Aerolinea= new Aerolinea();
  ciudadO: Ciudad = new Ciudad();
  ciudadD: Ciudad = new Ciudad();
  vuelo2: Prueba = new Prueba();
  numeros="!@#$%&/()=?¡+*{}[_],'' '\"";
  i=0;
  date: Date= new Date();
  constructor(private vueloServicio:VueloService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    console.log('this.id',this.id);
    this.vuelo2= new Prueba();
    this.vueloServicio.obtenerId(this.id).subscribe(dato=>{
      this.vuelo2=dato;
      console.log(this.vuelo2)
      console.log(dato.code)
    })
    this.ObtenerAerolineas()
    this.ObtenerCiudades()
  }
  
  actualizar(){
   
    const despegue=new DatePipe('en-US');
    let formatoD= despegue.transform(this.vuelo2.departureTime,"mm")
    let formatoA= despegue.transform(this.vuelo2.arrivalTime,"mm")
    let formatoHD= despegue.transform(this.vuelo2.departureTime,"hh")
    let formatoHA= despegue.transform(this.vuelo2.arrivalTime,"hh")
    let formatoDD= despegue.transform(this.vuelo2.departureTime,"yyyy-MM-dd")
    let formatoDA= despegue.transform(this.vuelo2.arrivalTime,"yyyy-MM-dd")
    this.vuelo2.fkIdAirline=this.aerolinea
    this.vuelo2.fkIdCitieOrigin=this.ciudadO
    this.vuelo2.fkIdCitieDestination=this.ciudadD

    if(this.vuelo2.code == null || this.vuelo2.code.length>20){

    /*if(this.vuelo2.code == null || this.vuelo2.code.length>20){
      alert("El Código es requerido con 20 caracteres máximo");
    }
    else if(this.vuelo2.cost == null || this.vuelo2.cost.toString().length>12){
      alert("El costo es requerido con 12 caracteres máximo");
    }
    else*/ if(this.vuelo2.arrivalTime == null){
      alert("El aterrizaje es requerido");
    }
    else if(this.vuelo2.departureTime == null){
      alert("El despegue es requerido");
    }
    else if(this.vuelo2.fkIdAirline== null){
      alert("La aerolínea es requerida");
    }
    else if(this.vuelo2.fkIdCitieOrigin == null){
      alert("La ciudad de origen es requerida");
    }
    else if(this.vuelo2.fkIdCitieOrigin==this.vuelo2.fkIdCitieDestination)
    {
      alert("La ciudad de destino no puede ser la misma que la de origen");
    }
    else if(this.vuelo2.fkIdCitieDestination == null){
      alert("La ciudad de destino es requerida");
    }
    else if(this.vuelo2.arrivalTime<=this.vuelo2.departureTime)
    {
      alert("La fecha y hora de aterrizaje no puede ser antes o igual del despegue ")
    }
    else if(this.vuelo2.arrivalTime<this.vuelo2.departureTime)
    {
      alert("La fecha y hora de despegue no puede ser antes de la fecha actual")
    }
    
    else if(Number(formatoA)-Number(formatoD)<20 && Number(formatoHA)==Number(formatoHD) && formatoDD==formatoDA)
    {
      alert("El rango mínimo entre despegue y aterrizaje es de 20 minutos")
    }
    else if(this.tieneNumeros(this.vuelo2.code)==1)
    {
      alert("El código no debe contener espacio o caracteres especiales")
    }
    else if(this.vuelo2.cost<=0)
    {
      alert("El costo no debe ser un valor negativo o 0")
    }
    else{
    this.vueloServicio.actualizar(this.vuelo2, this.id).subscribe(dato=>{
      console.log(dato);
      this.irAListaGeneral();
      alert("Registro Actualizado");
    }, error => console.log(error));
  }
}
  }
 
  irAListaGeneral(){
    this.router.navigate(['vuelos-listar']);
  }
  onSubmit(){
    this.actualizar();
  }
  private ObtenerAerolineas(){
    this.vueloServicio.listarAerolineas().subscribe(dato=>{
       this.aerolineas = dato;
    })
   }

   private ObtenerCiudades(){
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

