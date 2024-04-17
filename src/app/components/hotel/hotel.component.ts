import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fromEvent, isEmpty, map, Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hoteles: Hotel[];
  id: number;
  hotel: Hotel = new Hotel();
  hotel2 = new Hotel();
  json: string;
  mensajeRespuesta: string;
  idHotel: number;
  p: number = 1
  total: number = 0;

  constructor(private servicio: HotelService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ObtenerLista();
  }
  private ObtenerLista() {
    this.servicio.obtenerListaDeHoteles().subscribe(dato => {
      this.hoteles = dato;
      console.log('this.hoteles', this.hoteles);
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

  buscaridHotel(idHotel: number) {
    if (idHotel == null) {
      this.ObtenerLista()
    }
    this.servicio.filtroidHotel(idHotel).subscribe(dato => {
      this.hoteles = dato;
      this.json = JSON.stringify(this.hoteles);
      console.log(this.hoteles);
    }, err => {
      422
      alert("Hotel no encontrado")
    })
  }

  buscarNameHotel(nameHotel: string) {
    if (nameHotel == "" || nameHotel == null) {
      this.ObtenerLista()
    }
    this.servicio.filtroNameHotel(nameHotel).subscribe(dato => {
      this.hoteles = dato;
      this.json = JSON.stringify(this.hoteles);
      console.log(this.hoteles);
    }, err => {
      422
      alert("Hotel no encontrado")
    })
  }

  buscarCodeHotel(codeHotel: string) {
    if (codeHotel == "" || codeHotel == null) {
      this.ObtenerLista()
    }
    this.servicio.filtroCodeHotel(codeHotel).subscribe(dato => {
      this.hoteles = dato;
      this.json = JSON.stringify(this.hoteles);
      console.log(this.hoteles);
    }, err => {
      422
      alert("Hotel no encontrado")
    })
  }

  buscarCity(city: string) {
    if (city == "" || city == null) {
      this.ObtenerLista()
    }
    this.servicio.filtroCity(city).subscribe(dato => {
      this.hoteles = dato;
      this.json = JSON.stringify(this.hoteles);
      console.log(this.hoteles);
    }, err => {
      422
      alert("Hotel no encontrado")
    })
  }

  actualizar(id: number) {
    this.router.navigate(['modificar-hotel', id])
  }

  eliminarHotel(id: number) {
    let condicion = confirm("¿Estás seguro de eliminar el hotel?");
    condicion
    if (condicion == true) {
      this.servicio.eliminarHotel(id).subscribe(dato => {
        console.log(dato);
        this.ObtenerLista();
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

  crearCuarto(id: number) {
    this.router.navigate(['registrar-cuarto-por-id', id]);
  }

  editarEstatus(idHotel: number) {
    if (this.hotel2.statusHotel == 1) {

      this.hotel2.statusHotel = 0;
    }
    else {
      this.hotel2.statusHotel = 1;
    }
    this.servicio.estatusHotel(this.hotel2, idHotel).subscribe(dato => {
      console.log(dato);
      alert("Estatus Actualizado");
      this.ObtenerLista();
    })
  }

  toBase64(blob: Blob): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return fromEvent(reader, 'load')
      .pipe(map(() => (reader.result as string).split(',')[1]));

  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.ObtenerLista();
  }
  
}