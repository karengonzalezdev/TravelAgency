import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReservacionesComponent } from './components/reservaciones/reservaciones/reservaciones.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { VueloComponent } from './components/vuelo/vuelo.component';
import { FiltroReservacionComponent } from './components/filtro-reservacion/filtro-reservacion.component';
import { RegistrarReservacionComponent } from './components/registrar-reservacion/registrar-reservacion.component';
import { FiltroCiudadComponent } from './components/filtro-ciudad/filtro-ciudad.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { AerolineaComponent } from './components/aerolinea/aerolinea.component';
import { RegistrarAerolineaComponent } from './components/registrar-aerolinea/registrar-aerolinea.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { RegistrarCuartoComponent } from './components/registrar-cuarto/registrar-cuarto.component';
import { ModificarHotelComponent } from './components/modificar-hotel/modificar-hotel.component';
import { ModificarCuartoComponent } from './components/modificar-cuarto/modificar-cuarto.component';
import { RegistrarHotelComponent } from './components/registrar-hotel/registrar-hotel.component';
import { RoleComponent } from './components/usuarios/roles/role/role.component';
import { RoleCrearComponent } from './components/usuarios/roles/role-crear/role-crear.component';
import { RoleEditarComponent } from './components/usuarios/roles/role-editar/role-editar.component';
import { UsuarioCrearComponent } from './components/usuarios/user/usuario-crear/usuario-crear.component';
import { PermisoCrearComponent } from './components/usuarios/permisos/permiso-crear/permiso-crear.component';
import { PermisoConsultarComponent } from './components/usuarios/permisos/permiso-consultar/permiso-consultar.component';
import { PermisoEditarComponent } from './components/usuarios/permisos/permiso-editar/permiso-editar.component';
import { BuscarReservaFiltroCampoComponent } from './components/buscar-reserva-filtro-campo/buscar-reserva-filtro-campo.component';
import { ModificarReservacionComponent } from './components/modificar-reservacion/modificar-reservacion.component';
import { RegistrarCiudadComponent } from './components/registrar-ciudad/registrar-ciudad.component';
import { RegistrarVueloComponent } from './components/registrar-vuelo/registrar-vuelo.component';
import { BuscarAerolineaComponent } from './components/buscar-aerolinea/buscar-aerolinea.component';
import { ModificarAerolineaComponent } from './components/modificar-aerolinea/modificar-aerolinea.component';
import { ModificarCiudadComponent } from './components/modificar-ciudad/modificar-ciudad.component';
import { ModificarVueloComponent } from './components/modificar-vuelo/modificar-vuelo.component';
import { FiltroHotelComponent } from './components/filtro-hotel/filtro-hotel.component';
import { UsuarioConsultarNuevoComponent } from './components/usuarios/user/usuario-consultar-nuevo/usuario-consultar-nuevo.component';
import { ModificarUsuarioComponent } from './components/usuarios/user/modificar-usuario/modificar-usuario.component';
import { TablaPaginadaComponent } from './components/tabla-paginada/tabla-paginada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { CuartosPorIdHotelComponent } from './components/cuartos-por-id-hotel/cuartos-por-id-hotel.component';
import { RegistrarCuartoPorIdComponent } from './components/registrar-cuarto-por-id/registrar-cuarto-por-id.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservacionesComponent,
    HotelComponent,
    CuartoComponent,
    VueloComponent,
    RegistrarReservacionComponent,
      FiltroCiudadComponent,
      CiudadComponent,
      AerolineaComponent,
      RegistrarAerolineaComponent,
    FiltroReservacionComponent,
    PrincipalComponent,
    TablaComponent,
    RegistrarHotelComponent,
    RegistrarCuartoComponent,
    ModificarHotelComponent,
    ModificarCuartoComponent,
    RoleComponent,
    RoleCrearComponent,
    RoleEditarComponent,
    UsuarioCrearComponent,
    PermisoCrearComponent,
    PermisoConsultarComponent,
    PermisoEditarComponent,
    BuscarReservaFiltroCampoComponent,
    ModificarReservacionComponent,
      RegistrarCiudadComponent,
      RegistrarVueloComponent,
      BuscarAerolineaComponent,
      ModificarAerolineaComponent,
      ModificarCiudadComponent,
      ModificarVueloComponent,
      FiltroHotelComponent,
     UsuarioConsultarNuevoComponent,
    ModificarUsuarioComponent,
    CuartosPorIdHotelComponent,
    TablaPaginadaComponent,
    RegistrarCuartoPorIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

