import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { Prueba } from 'src/app/models/prueba';
import { Reservaciones } from 'src/app/models/reservaciones';
import { Usuario } from 'src/app/models/usuario';
import { CuartoService } from 'src/app/service/cuarto.service';
import { ReservacionesService } from 'src/app/service/reservaciones.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-modificar-reservacion',
  templateUrl: './modificar-reservacion.component.html',
  styleUrls: ['./modificar-reservacion.component.css']
})
export class ModificarReservacionComponent implements OnInit {
  reservaciones = new Reservaciones();
  id:number;
  listaUsuario:Usuario[];
  reservations: Reservaciones[];
  cuartos: Cuarto[];
  prueba : Reservaciones = new Reservaciones();
  prueba2 : Cuarto = new Cuarto();
  prueba3 : Prueba = new Prueba();
  prueba4 : Usuario = new Usuario();
  hotel : Hotel = new Hotel();
  vuelos : Prueba[];
  pruebaNumeros = new RegExp('^[A-Z]+$', 'i');
  numeros ="0123456789!@#$%&/()=?¡+*{}[_-].,'' '\"";
  i = 0;
  fecha: Date = new Date();
  constructor(private clienteServicio:ReservacionesService, private router:Router, private route:ActivatedRoute,private usuario:usuarioService, private cuartoService:CuartoService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.prueba = new Reservaciones();
    this.clienteServicio.obtenerId(this.id).subscribe(dato =>{
      this.prueba = dato;
      console.log(this.reservaciones)
    })
    this.ObtenerLista()
    this.ObtenerListaVuelos()
    this.obtenerUsuarios()
}
  actualizar(){
    const datePipe = new DatePipe('en-US');
    let format = datePipe.transform(this.prueba.startDate, 'yyyy-MM-dd');
    let format2 = datePipe.transform(this.prueba.endDate, 'yyyy-MM-dd');
    this.prueba.room = this.prueba2
    this.prueba.flight = this.prueba3
    this.prueba.user = this.prueba4
    /*if(this.prueba.name == null || this.prueba.name == ""){
      alert("El Nombre es requerido");
    }
    else if(this.prueba.lastNameDad == null || this.prueba.lastNameDad == ""){
      alert("Apellido paterno es requerido");
    }
    else if(this.prueba.lastNameMom == null || this.prueba.lastNameMom == ""){
      alert("El apellido materno es requerido");
    }
    else if(this.prueba.description == null || this.prueba.description== ""){
      alert("La descripcion es requerida");
    }
    else*/ if(this.prueba.startDate == null){
      alert("La fecha de inicio es requerida");
    }
    else if(this.prueba2.idRoom == null){
      alert("El cuarto es requerido")
    }
    else if(this.prueba3.idFlight == null){
      alert("El vuelo es requerido")
    }
    else if(this.prueba4.idUser == null){
      alert("El usuario es requrido")
    }
    else if(this.prueba.endDate == null){
      alert("La fecha de fin es requerida");
    }
    else if(this.prueba.endDate < this.prueba.startDate ){
      alert("La fecha de fin no puede ser anterior a la fecha de inicio")
    }
    else if(this.prueba.startDate > this.prueba.endDate){
      alert("La fecha de inicio no puede ser posterior a la fecha de fin")
    }
    else if(format == format2){
      alert("Debe escoger al menos un dia posterior a la fecha de inicio")
      console.log(this.prueba.startDate.toDateString)
     }
    else if(this.isNumeric(this.prueba.name) == 1){
      alert("No se admiten numeros en el campo de nombre");
     }
     else if(this.isNumeric(this.prueba.lastNameDad) == 1){
      alert("No se admiten numeros en el campo de apellido paterno");
     }
     else if(this.isNumeric(this.prueba.lastNameMom) == 1){
      alert("No se admiten numeros en el campo de apellido materno");
     }
    
    else if(this.prueba.name.length > 50){
      alert("los caracteres del nombre superan la longitud permitida")
    }
    else if(this.prueba.lastNameDad.length > 50){
      alert("los caracteres del apellido paterno superan la longitud permitida")
    }
    else if(this.prueba.lastNameMom.length > 50){
      alert("los caracteres del apellido materno superan la longitud permitida")
    }
    else if(this.prueba.description.length > 100){
      alert("los caracteres de la descripcion paterno superan la longitud permitida")
    }
    else{
    this.prueba.name = this.prueba.name.toUpperCase()
    this.prueba.lastNameDad = this.prueba.name.toUpperCase()
    this.prueba.lastNameMom = this.prueba.lastNameMom.toUpperCase()
    this.prueba.description = this.prueba.description.toUpperCase()
    this.clienteServicio.actualizarReservacion(this.prueba, this.id).subscribe(dato=>{
      console.log(dato);
      this.irAListaGeneral();
      alert("Registro Actualizado");
    }, error => console.log(error));
  }
  }
  irAListaGeneral(){
    this.router.navigate(['rervaciones-listar']);
  }
  onSubmit(){
    this.actualizar();
  }
  private ObtenerLista(){
    this.clienteServicio.listarCuartos().subscribe(dato=>{
       this.cuartos = dato;
    })
   }
   private ObtenerListaVuelos(){
    this.clienteServicio.listarVuelos().subscribe(dato=>{
       this.vuelos = dato;
    })
   }
   isNumeric(texto:string){
    for(this.i = 0; this.i<texto.length; this.i++){
      if(this.numeros.indexOf(texto.charAt(this.i), 0) !=-1){
        return 1;
      }
    }
    return 0;
   }
   private obtenerUsuarios(){
    this.usuario.obtenerListaDeUsuarios().subscribe(dato=>{
      this.listaUsuario = dato;
    })
   }
   cancelar(id:number){
    this.prueba2.status = 0
    this.cuartoService.estatusCuarto(this.prueba2, id).subscribe(dato =>{
      this.router.navigate(['rervaciones-listar'])
    })
   }
}
