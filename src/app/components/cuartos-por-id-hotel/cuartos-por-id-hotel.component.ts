import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { CuartoService } from 'src/app/service/cuarto.service';

@Component({
  selector: 'app-cuartos-por-id-hotel',
  templateUrl: './cuartos-por-id-hotel.component.html',
  styleUrls: ['./cuartos-por-id-hotel.component.css']
})
export class CuartosPorIdHotelComponent implements OnInit {
  cuartos: Cuarto[];
  hoteles: Hotel[];
  hotel2: Hotel = new Hotel();
  json: string;
  id: number;
  prueba = new Cuarto();
  cuarto: Cuarto = new Cuarto();
  mensajeRespuesta: string;

  constructor(private servicio: CuartoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuarto = new Cuarto();
    this.servicio.obtenerRoomByHotel(this.id).subscribe(dato => {
      this.cuartos = dato;
      console.log(this.prueba)
    })
  }

  private ObtenerTodos() {
    this.servicio.obtenerListaDeCuartos().subscribe(dato => {
      this.cuartos = dato;
    })
  }

  private ObtenerCuartos(id: number) {
    this.servicio.obtenerRoomByHotel(id).subscribe(dato => {
      this.cuartos = dato;
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
        this.ObtenerCuartos(this.id);
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
      this.ObtenerCuartos(this.id);
    })
  }

  irAtras() {
    window.history.back();
  }
  
}
