import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Cuarto } from 'src/app/models/cuarto';
import { Reservaciones } from 'src/app/models/reservaciones';
import { CuartoService } from 'src/app/service/cuarto.service';
import { ReservacionesService } from 'src/app/service/reservaciones.service';

@Component({
  selector: 'app-tabla-paginada',
  templateUrl: './tabla-paginada.component.html',
  styleUrls: ['./tabla-paginada.component.css']
})
export class TablaPaginadaComponent implements OnInit {
  constructor(private servicio:ReservacionesService, private router:Router, private cuartService:CuartoService) { }
  reservations: Reservaciones[];
  p: number = 1
  total: number = 0;
  prueba:Reservaciones = new Reservaciones()
  cuarto:Cuarto = new Cuarto();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  ngOnInit(): void {
    this.ObtenerLista()
  }

  private ObtenerLista(){
    this.servicio.obtenerListaDeClientes().subscribe(dato=>{
       this.reservations = dato;
    })
   }

   pageChangeEvent(event: number){
    this.p = event;
    this.ObtenerLista();
   }

}


