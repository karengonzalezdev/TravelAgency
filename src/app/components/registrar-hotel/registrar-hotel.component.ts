import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-registrar-hotel',
  templateUrl: './registrar-hotel.component.html',
  styleUrls: ['./registrar-hotel.component.css']
})
export class RegistrarHotelComponent implements OnInit {
  cuartosList: Cuarto[];
  id: number;
  hoteles: Hotel = new Hotel();
  cuartos: Cuarto = new Cuarto();
  foto: any;
  toastr: any;
  imgURL: any;
  resultado: any;
  numeros = "¿´|°¬^`~,;:!@#$%&/()=?¡+*{}[_-]'\"";
  i = 0;
  public archivos: any[] = [];
  ciudades: Ciudad[];
  ciudadD: Ciudad = new Ciudad();

  constructor(private hotelService: HotelService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerCuartos();
    this.obtenerListaCiudades();
  }

  guardarHotel() {
    const formulario = new FormData();
    this.archivos.forEach(archivo => {
      console.log(archivo);
      formulario.append('archivo', archivo);
    });
    this.hoteles.nameHotel = this.hoteles.nameHotel.toUpperCase();
    this.hoteles.cityDestination = this.ciudadD
    this.hoteles.addressHotel = this.hoteles.addressHotel.toUpperCase();
    this.hoteles.logo = this.resultado;
    this.hoteles.codeHotel = this.hoteles.codeHotel.toUpperCase();

    if (this.hoteles.logo == null || this.hoteles.logo.toString() == "") {
      alert("El logo es requerido")
    }
    else if (this.hoteles.cityDestination == null) {
      alert("La ciudad es requerida");
    }
    else if (this.tieneNumeros(this.hoteles.codeHotel) == 1) {
      alert("El código no debe contener caracteres especiales")
    }
    else if (this.tieneNumeros(this.hoteles.nameHotel) == 1) {
      alert("El nombre no debe contener caracteres especiales")
    }

    else {
      this.hotelService.crearHotel(this.hoteles).subscribe(dato => {
        this.listaDeHoteles();
        alert("Hotel registrado");
      }, error => {
        let errorNuevo = JSON.stringify(error)
        if(errorNuevo.match("El codigo del hotel ya existe")){
          alert("El codigo del hotel ya existe")
        }
        else if(errorNuevo.match("El hotel ya existe")){
          alert("El hotel ya existe")
        }
      });
    }
  }

  listaDeHoteles() {
    this.router.navigate(['hoteles-listar'])
  }

  onSubmitting() {
    this.guardarHotel();
  }

  obtenerCuartos() {
    this.hotelService.listarRooms().subscribe(dato => {
      this.cuartosList = dato;
    })
  }

  irAtras() {
    window.history.back();
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
        if (metadatIMG.includes('jpeg') || metadatIMG.includes('jpg')
        ||  metadatIMG.includes('JPEG') ||  metadatIMG.includes('JPG') 
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

  tieneNumeros(texto: String) {
    for (this.i = 0; this.i < texto.length; this.i++) {
      if (this.numeros.indexOf(texto.charAt(this.i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

}