import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Hotel } from 'src/app/models/hotel';
import { CuartoService } from 'src/app/service/cuarto.service';

@Component({
  selector: 'app-registrar-cuarto',
  templateUrl: './registrar-cuarto-por-id.component.html',
  styleUrls: ['./registrar-cuarto-por-id.component.css']
})
export class RegistrarCuartoPorIdComponent implements OnInit {
  cuartos: Cuarto = new Cuarto();
  hoteles: Hotel = new Hotel();
  hotelList: Hotel[];
  id: number;
  prueba = new Cuarto();
  cuarto: Cuarto;
  cuarto2: Cuarto = new Cuarto();
  numeros = "¿´|°¬^`~,;:!@#$%&/()=?¡+*{}[_-]'\"";
  punto = "."
  i = 0;

  constructor(private cuartoService: CuartoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuarto2 = new Cuarto();
  }

  guardarCuarto() {
    this.cuarto2.nameRoom = this.cuarto2.nameRoom.toUpperCase();
    this.cuarto2.description = this.cuarto2.description.toUpperCase();
    this.cuarto2.noPeople
    this.cuarto2.price
    this.cuarto2.codeRoom = this.cuarto2.codeRoom.toUpperCase();

    if (this.tieneNumeros(this.cuarto2.codeRoom) == 1) {
      alert("El código no debe contener caracteres especiales")
    }
    else if (this.tieneNumeros(this.cuarto2.nameRoom) == 1) {
      alert("El nombre no debe contener caracteres especiales")
    }
    else if (this.cuarto2.price == 0) {
      alert("El precio debe ser mayor que cero")
    }
    else if (this.tieneNumeros(this.cuarto2.price.toString()) == 1) {
      alert("El precio no debe contener caracteres especiales")
    }
    else if (this.cuarto2.noPeople == 0) {
      alert("Debe haber más de una persona en la habitación")
    }
    else if (this.tienePunto(this.cuarto2.noPeople.toString()) == 1) {
      alert("El número de personas debe ser un entero")
    }
    else if (this.cuarto2.noPeople > 15) {
      alert("No puede haber más de 15 personas en la habitación")
    }
    else if (this.tieneNumeros(this.cuarto2.noPeople.toString()) == 1) {
      alert("El número de personas no debe contener caracteres especiales")
    }
    else {
      this.cuartoService.crearCuarto(this.cuarto2, this.id).subscribe(dato => {
        console.log(dato);
        this.listaDeCuartos(this.id);
        alert("Cuarto registrado");
      }, error => {
        let errorNuevo = JSON.stringify(error)
        if(errorNuevo.match("El cuarto ya existe")){
          alert("El cuarto ya existe")
        }
        else if(errorNuevo.match("El codigo del cuarto ya existe")){
          alert("El codigo del cuarto ya existe")
        }
      }
      );
    }
  }

  listaDeCuartos(id: number) {
    this.router.navigate(['cuartos-listar-id', id])
  }

  onSubmit() {
    this.guardarCuarto();
  }

  obtenerHoteles() {
    this.cuartoService.listarHoteles().subscribe(dato => {
      this.hotelList = dato;
    })
  }

  irAtras() {
    window.history.back();
  }

  tieneNumeros(texto: String) {
    for (this.i = 0; this.i < texto.length; this.i++) {
      if (this.numeros.indexOf(texto.charAt(this.i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  tienePunto(texto: String) {
    for (this.i = 0; this.i < texto.length; this.i++) {
      if (this.punto.indexOf(texto.charAt(this.i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }
  
}
