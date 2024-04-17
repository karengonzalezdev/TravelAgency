import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent {

  constructor(private router:Router) { }

  redireccionarListaReservaciones(){
    this.router.navigate(["rervaciones-listar"]);
  }

  redireccionarUsuario(){
    this.router.navigate(["registro-usuario"]);
  }

  redireccionarAerolinea(){
    this.router.navigate(["registrar-aerolinea"]);
  }

  redireccionarHotel(){
    this.router.navigate(['registrar-hotel']);
  }
}
