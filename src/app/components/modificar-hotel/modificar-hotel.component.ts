import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-modificar-hotel',
  templateUrl: './modificar-hotel.component.html',
  styleUrls: ['./modificar-hotel.component.css']
})
export class ModificarHotelComponent implements OnInit {
  hotel = new Hotel();
  id: number;
  hoteles: Hotel[];
  hotel2: Hotel = new Hotel();
  cuartosList: Cuarto[];
  cuartos: Cuarto = new Cuarto();
  numeros = "¿´|°¬^`~,;:!@#$%&/()=?¡+*{}[_-]'\"";
  i = 0;
  foto: any;
  toastr: any;
  imgURL: any;
  resultado: any;
  imgURL64: any;
  public archivos: any[] = [];
  ciudadD: Ciudad = new Ciudad();
  ciudades: Ciudad[];

  constructor(private hotelService: HotelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hotel2 = new Hotel();
    this.hotelService.obtenerId(this.id).subscribe(dato => {
      this.hotel2 = dato;
      this.imgURL64 = "data:image/*;base64," + this.hotel2.logo;
    })
    this.obtenerListaCiudades();
  }

  actualizar() {
    const formulario = new FormData();
    this.archivos.forEach(archivo => {
      formulario.append('archivo', archivo);
    });
    this.hotel2.nameHotel = this.hotel2.nameHotel.toUpperCase();
    this.hotel2.cityDestination = this.ciudadD;
    this.hotel2.addressHotel = this.hotel2.addressHotel.toUpperCase();
    this.hotel2.logo = this.resultado;
    this.hotel2.codeHotel = this.hotel2.codeHotel.toUpperCase();

    if (this.hotel2.logo == null || this.hotel2.logo.toString() == "") {
      alert("El logo es requerido")
    }
    else if (this.tieneNumeros(this.hotel2.codeHotel) == 1) {
      alert("El código no debe contener caracteres especiales")
    }
    else if (this.tieneNumeros(this.hotel2.nameHotel) == 1) {
      alert("El nombre no debe contener caracteres especiales")
    }
    else if (this.hotel2.cityDestination == null) {
      alert("La ciudad es requerida")
    }
    else {
      this.hotelService.actualizar(this.hotel2, this.id).subscribe(dato => {
        this.listaGeneral();
        alert("Hotel actualizado");
      }, error => {
        let errorNuevo = JSON.stringify(error)
        if(errorNuevo.match("El codigo del hotel ya existe")){
          alert("El codigo del hotel ya existe")
        }
        else if(errorNuevo.match("El hotel ya esta en existencia")){
          alert("El hotel ya esta en existencia")
        }
      }
      );
    }
  }

  listaGeneral() {
    this.router.navigate(['hoteles-listar'])
  }

  onSubmit() {
    this.actualizar();
  }

  obtenerCuartos() {
    this.hotelService.listarRooms().subscribe(dato => {
      this.cuartosList = dato;
    })
  }

  crearCuarto(id: number) {
    this.router.navigate(['registrar-cuarto-por-id', id]);
  }

  irAtras() {
    window.history.back();
  }

  cuartosPorIdHotel(id: number) {
    this.router.navigate(['cuartos-listar-id', id]);
  }

  tieneNumeros(texto: String) {
    for (this.i = 0; this.i < texto.length; this.i++) {
      if (this.numeros.indexOf(texto.charAt(this.i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  private obtenerListaCiudades() {
    this.hotelService.listarCiudades().subscribe(dato => {
      this.ciudades = dato;
    })
  }

  capturaImagen(event: any) {
    this.foto = event.target.files[0];
    const foto = this.foto;
    const preview = document.getElementById('logo');
    const reader = new FileReader();
    let base64;
    let byteArray;
    var archivo = this.foto.name;
    var extension = archivo.slice((archivo.lastIndexOf(".") - 1 >>> 0) + 2);
    if (extension == 'jpg' || extension == 'jpeg' || extension == 'png'
    ||  extension == 'JPG' || extension == 'JPEG' || extension == 'PNG') {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
        this.imgURL = reader.result;
      };
      const imgrest = (): void => {
        let base64URL: string = "";
        let metadatIMG: string = "";
        base64 = reader.result;
        base64URL = (reader.result as string);
        metadatIMG = base64URL.substring(0, 23);
        if (metadatIMG.includes('jpeg') || metadatIMG.includes('jpg') || metadatIMG.includes('png')
        ||  metadatIMG.includes('JPEG') ||  metadatIMG.includes('JPG') ||  metadatIMG.includes('PNG')
        ) {
          console.log("Es una imagen");
          this.resultado = base64URL.substring(23, base64URL.length);
        }
        else if (metadatIMG.includes('png') || metadatIMG.includes('PNG')){
          console.log("Es una imagen");
          this.resultado = base64URL.substring(22, base64URL.length);
        }
        else {
          console.log("No es una imagen");
          this.resultado = base64URL.substring(23, base64URL.length);
          alert("No es una imagen");
        }

      };
      this.foto = reader.addEventListener("loadend", imgrest, true);
    } else {
      alert("Este formato no es válido");
      window.location.reload();
    }
  }

}
