import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-filtro-hotel',
  templateUrl: './filtro-hotel.component.html',
  styleUrls: ['./filtro-hotel.component.css']
})
export class FiltroHotelComponent implements OnInit {
  hotel: Hotel = new Hotel;
  hoteles: Hotel[];
  prueba = new Hotel();
  json: string;
  palabra: string;
  mensajeRespuesta: string;

  constructor(private servicio: HotelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.palabra = this.route.snapshot.params['palabra'];
    this.buscarHotel(this.palabra);
  }
  private ObtenerTodos() {
    this.servicio.obtenerListaDeHoteles().subscribe(dato => {
      this.hoteles = dato;
    })
  }

  buscarHotel(palabra: string) {
    this.servicio.filtroHotel(palabra).subscribe(dato => {
      this.hoteles = dato;
      this.json = JSON.stringify(this.hoteles);
      console.log(this.hoteles);
    }, err => {
      alert("Hotel no encontrado")
    })
  }

  editarHotel() {
    this.router.navigate(['actualizar-hotel'])
  }

  eliminarHotel(id: number) {
    let condicion = confirm("¿Estás seguro de eliminar el hotel?");
    condicion
    if (condicion == true) {
      this.servicio.eliminarHotel(id).subscribe(dato => {
        console.log(dato);
        this.ObtenerTodos();
        this.mensajeRespuesta = JSON.stringify(dato);
        if (this.mensajeRespuesta.match("El hotel tiene cuartos activos")) {
          alert("El hotel tiene cuartos activos");
        }
        else {
          alert("Hotel eliminado");
          window.location.reload();
        }
      })
    }
  }

  redireccionar() {
    this.router.navigate(['buscar-hotel']);
  }

  buscarCuartos() {
    this.router.navigate(['cuartos-listar']);
  }

  crearCuarto() {
    this.router.navigate(['registrar-cuarto']);
  }

  editarEstatus(idHotel: number) {
    if (this.prueba.statusHotel == 1) {

      this.prueba.statusHotel = 0;
    }
    else {
      this.prueba.statusHotel = 1;
    }
    this.servicio.estatusHotel(this.prueba, idHotel).subscribe(dato => {
      console.log(dato);
      alert("Estatus Actualizado");
      this.ObtenerTodos();
    })
  }
  
}