import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { CuartoService } from 'src/app/service/cuarto.service';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {
  cuartos: Cuarto[];
  hoteles: Hotel = new Hotel();
  hotelList: Hotel[];
  prueba = new Cuarto();
  json: string;
  mensajeRespuesta: string;

  constructor(private servicio: CuartoService, private router: Router) { }

  ngOnInit() {
    this.ObtenerTodos();
  }
  private ObtenerTodos() {
    this.servicio.obtenerListaDeCuartos().subscribe(dato => {
      this.cuartos = dato;
    })
  }

  buscarCuarto(word: string) {
    this.servicio.filtroCuarto(word).subscribe(dato => {
      this.cuartos = dato;
    })
  }

  buscarNameRoom(nameRoom: string) {
    if (nameRoom == "" || nameRoom == null) {
      this.ObtenerTodos()
    }
    this.servicio.filtroNameRoom(nameRoom).subscribe(dato => {
      this.cuartos = dato;
      this.json = JSON.stringify(this.cuartos);
      console.log(this.cuartos);
    }, err => {
      422
      alert("Cuarto no encontrado")
    })
  }

  buscarCodeRoom(codeRoom: string) {
    if (codeRoom == "" || codeRoom == null) {
      this.ObtenerTodos()
    }
    this.servicio.filtroCodeRoom(codeRoom).subscribe(dato => {
      this.cuartos = dato;
      this.json = JSON.stringify(this.cuartos);
      console.log(this.cuartos);
    }, err => {
      422
      alert("Cuarto no encontrado")
    })
  }

  editarCuarto(id: number) {
    this.router.navigate(['modificar-cuarto', id]);
  }

  eliminarCuarto(id: number) {
    let condicion = confirm("¿Estás seguro de querer eliminar el cuarto?");
    condicion
    if (condicion == true) {
      this.servicio.eliminarCuarto(id).subscribe(dato => {
        console.log(dato);
        this.ObtenerTodos();
        this.mensajeRespuesta = JSON.stringify(dato);
        if (this.mensajeRespuesta.match("El cuarto tiene reservaciones activas")) {
          alert("El cuarto tiene reservaciones activas");
        }
        else {
          alert("Registro Eliminado");
          window.location.reload();
        }
      })
    }
  }

  redireccionar() {
    this.router.navigate(['buscar-campo']);
  }

  editarEstatusCuarto(idRoom: number) {
    if (this.prueba.status == 1) {

      this.prueba.status = 0;
    }
    else {
      this.prueba.status = 1;
    }
    this.servicio.estatusCuarto(this.prueba, idRoom).subscribe(dato => {
      console.log(dato);
      alert("Estatus Actualizado");
      this.ObtenerTodos();
    })
  }
  
  irAtras() {
    window.history.back();
  }

}