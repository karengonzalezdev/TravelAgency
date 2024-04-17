
import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AerolineaComponent } from './components/aerolinea/aerolinea.component';
import { ModificarAerolineaComponent } from './components/modificar-aerolinea/modificar-aerolinea.component';
import { ModificarCiudadComponent } from './components/modificar-ciudad/modificar-ciudad.component';
import { ModificarVueloComponent } from './components/modificar-vuelo/modificar-vuelo.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { FiltroReservacionComponent } from './components/filtro-reservacion/filtro-reservacion.component';
import { RegistrarAerolineaComponent } from './components/registrar-aerolinea/registrar-aerolinea.component';
import { RegistrarCiudadComponent } from './components/registrar-ciudad/registrar-ciudad.component';
import { RegistrarVueloComponent } from './components/registrar-vuelo/registrar-vuelo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistrarReservacionComponent } from './components/registrar-reservacion/registrar-reservacion.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones/reservaciones.component';
import { VueloComponent } from './components/vuelo/vuelo.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { RegistrarHotelComponent } from './components/registrar-hotel/registrar-hotel.component';
import { RegistrarCuartoComponent } from './components/registrar-cuarto/registrar-cuarto.component';
import { ModificarHotelComponent } from './components/modificar-hotel/modificar-hotel.component';
import { ModificarCuartoComponent } from './components/modificar-cuarto/modificar-cuarto.component';
import { UsuarioCrearComponent } from './components/usuarios/user/usuario-crear/usuario-crear.component';
import { UsuarioConsultarNuevoComponent } from './components/usuarios/user/usuario-consultar-nuevo/usuario-consultar-nuevo.component';
import { RoleCrearComponent } from './components/usuarios/roles/role-crear/role-crear.component';
import { RoleEditarComponent } from './components/usuarios/roles/role-editar/role-editar.component'; 
import { RoleComponent } from './components/usuarios/roles/role/role.component';
import { BuscarReservaFiltroCampoComponent } from './components/buscar-reserva-filtro-campo/buscar-reserva-filtro-campo.component';
import { PermisoCrearComponent } from './components/usuarios/permisos/permiso-crear/permiso-crear.component';
import { ModificarReservacionComponent } from './components/modificar-reservacion/modificar-reservacion.component';
import { FiltroHotelComponent } from './components/filtro-hotel/filtro-hotel.component';
import { ModificarUsuarioComponent } from './components/usuarios/user/modificar-usuario/modificar-usuario.component';
import { PermisoConsultarComponent } from './components/usuarios/permisos/permiso-consultar/permiso-consultar.component';
import { PermisoEditarComponent } from './components/usuarios/permisos/permiso-editar/permiso-editar.component';
import { TablaPaginadaComponent } from './components/tabla-paginada/tabla-paginada.component';
import { CuartosPorIdHotelComponent } from './components/cuartos-por-id-hotel/cuartos-por-id-hotel.component';
import { RegistrarCuartoPorIdComponent } from './components/registrar-cuarto-por-id/registrar-cuarto-por-id.component';


const routes: Routes = [
  {path: "", redirectTo:'principal', pathMatch:'full'},
  {path:'rervaciones-listar', component:ReservacionesComponent},
  {path:'ciudades-listar', component:CiudadComponent},
  {path:'aerolineas-listar', component:AerolineaComponent},
  {path:'vuelos-listar', component:VueloComponent},
  {path:'registrar-aerolinea', component:RegistrarAerolineaComponent},
  {path:'registrar-ciudad', component:RegistrarCiudadComponent},
  {path: 'registrar-reserva', component:RegistrarReservacionComponent},
  {path: 'registrar-vuelo', component:RegistrarVueloComponent},
  {path: 'modificar-aerolinea/:id', component:ModificarAerolineaComponent},
  {path: 'modificar-ciudad/:id', component:ModificarCiudadComponent},
  {path: 'modificar-vuelo/:id', component:ModificarVueloComponent},
  {path: 'actualizar-reservacion/:id', component:ModificarReservacionComponent},
  {path: 'actualizar-usuario/:id', component:ModificarUsuarioComponent},
  {path: 'principal', component:PrincipalComponent},
  {path: 'actualizar-reservacion/:id', component:ModificarReservacionComponent},
  {path: 'hoteles-listar', component:HotelComponent},
  {path: 'cuartos-listar', component:CuartoComponent},
  {path: 'registrar-hotel', component:RegistrarHotelComponent},
  {path: 'modificar-hotel/:id', component:ModificarHotelComponent},
  {path: 'modificar-cuarto/:id', component:ModificarCuartoComponent},
  {path: 'registro-usuario', component:UsuarioCrearComponent},
  {path: 'buscar-campo', component:FiltroReservacionComponent},
  {path: 'buscar-filtro-reservacion', component:BuscarReservaFiltroCampoComponent},
  {path: 'registro-role', component:RoleCrearComponent},
  {path: 'consulta-role', component:RoleComponent},
  {path: 'editar-role/:id/:idRolePerm', component:RoleEditarComponent},
  {path: 'registro-permiso', component:PermisoCrearComponent},
  {path: 'consultar-usuario', component:UsuarioConsultarNuevoComponent},
  {path: "", redirectTo:'principal', pathMatch:'full'},
  {path: 'buscar-hotel', component:FiltroHotelComponent},
  {path: 'consulta-permiso', component:PermisoConsultarComponent},
  {path: 'editar-permiso/:id', component:PermisoEditarComponent},
  {path: 'cuartos-listar-id', component:CuartosPorIdHotelComponent},
  {path: 'prueba', component:TablaPaginadaComponent},
  {path: 'cuartos-listar-id/:id', component:CuartosPorIdHotelComponent},
  {path: 'registrar-cuarto-por-id/:id', component:RegistrarCuartoPorIdComponent}

]
NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export const AppRoutingModule = RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload'
});

