import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { flight } from 'src/app/models/flight';
import { Hotel } from 'src/app/models/hotel';
import { Prueba } from 'src/app/models/prueba';
import { Reservaciones } from 'src/app/models/reservaciones';
import { Usuario } from 'src/app/models/usuario';
import { ReservacionesService } from 'src/app/service/reservaciones.service';
import { usuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-registrar-reservacion',
  templateUrl: './registrar-reservacion.component.html',
  styleUrls: ['./registrar-reservacion.component.css']
})
export class RegistrarReservacionComponent implements OnInit {
  reservations: Reservaciones[];
  cuartos: Cuarto[];
  listaUsuario:Usuario[];
  prueba : Reservaciones = new Reservaciones();
  prueba2 : Cuarto = new Cuarto();
  prueba3 : Prueba = new Prueba();
  prueba4 : Usuario = new Usuario();
  hotel : Hotel = new Hotel();
  vuelos : Prueba[];
  
  pruebaNumeros = new RegExp('^[A-Z]+$', 'i');
  numeros = "0123456789!@#$%&/()=?¡+*.{}[_-],.'' '\"";
  i = 0;
  fecha: Date = new Date();
  fecha3 :Date = new Date();
  fecha2 = this.fecha.getDate() + 1;
  fechaUnir: Date = new Date();
  fechaFinal = this.fechaUnir.setDate(this.fecha.getDate())
  fechaFinal2 = this.fechaUnir.setDate(this.fecha3.getDate());
  constructor(private clienteServicio:ReservacionesService, private router:Router, private usuario:usuarioService) { }

  ngOnInit(): void {
    this.ObtenerLista();
    this.ObtenerListaVuelos();
    this.obtenerUsuarios();
    console.log(this.fecha)
    //console.log(this.fecha2.getDate() + 1)

    console.log("Fecha fial  " + this.fechaFinal)
  }
  guardarCliente(){
    const datePipe = new DatePipe('en-US');
    let format = datePipe.transform(this.prueba.startDate, 'yyyy-MM-dd');
    let format2 = datePipe.transform(this.prueba.endDate, 'yyyy-MM-dd');
    this.prueba.room = this.prueba2
    this.prueba.flight = this.prueba3
    this.prueba.user = this.prueba4
    /*if(this.prueba.name == null){
      alert("El Nombre es requerido");
    }
    else if(this.prueba.lastNameDad == null){
      alert("Apellido paterno es requerido");
    }
    else if(this.prueba.lastNameMom == null){
      alert("El apellido materno es requerido");
    }
    else if(this.prueba.description == null){
      alert("La descripcion es requerida");
    }
    else*/ if(this.prueba.startDate == null){
      alert("La fecha de inicio es requerida");
    }
    else if(this.prueba.room == null){
      alert("El cuarto es requerido");
    }
    else if(this.prueba.flight == null){
      alert("El vuelo es requerido");
    }
    else if(this.prueba.user == null){
      alert("El usuario es requerido");
    }
    else if(this.prueba.endDate == null){
      alert("La fecha de fin es requerida");
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
    else if(this.prueba.endDate < this.prueba.startDate ){
      alert("La fecha de fin no puede ser anterior a la fecha de inicio")
    }
    else if(this.prueba.startDate > this.prueba.endDate){
      alert("La fecha de inicio no puede ser posterior a la fecha de fin")
    }
    else if(this.prueba.startDate == this.prueba.endDate){
      alert("La fecha de inicio, no puede ser igual a la fecha de fin")
    }
    
    else if(format == format2){
     alert("Debe escoger al menos un dia posterior a la fecha de inicio")
     console.log(this.prueba.startDate.toDateString)
    }
   else if(this.isNumeric(this.prueba.name) == 1){
    alert("No se admiten numeros ni carcateres especiales en el campo de nombre");
   }
   else if(this.isNumeric(this.prueba.lastNameDad) == 1){
    alert("No se admiten numeros ni carcateres especiales en el campo de apellido paterno");
   }
   else if(this.isNumeric(this.prueba.lastNameMom) == 1){
    alert("No se admiten numeros ni carcateres especiales en el campo de apellido materno");
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
      this.prueba.lastNameDad = this.prueba.lastNameDad.toUpperCase()
      this.prueba.lastNameMom = this.prueba.lastNameMom.toUpperCase()
      this.prueba.description = this.prueba.description.toUpperCase()
    this.clienteServicio.registrarReserva(this.prueba).subscribe(dato=>{
      console.log(dato);
      this.irAlistaClientes();
      alert("Reservacion Registrada");
    }, err =>{
      "El cuarto no está disponible";
      alert("El cuarto no está disponible");
    });
    }
  }
  irAlistaClientes(){
    this.router.navigate(['rervaciones-listar'])
  }

  onSubmit(){
    this.guardarCliente();
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

   private obtenerUsuarios(){
    this.usuario.obtenerListaDeUsuarios().subscribe(dato=>{
      this.listaUsuario = dato;
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

   redireccionar(){
    this.router.navigate(['rervaciones-listar']);
  }
}