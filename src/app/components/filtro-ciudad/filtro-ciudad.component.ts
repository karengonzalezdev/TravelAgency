import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-filtro-ciudad',
  templateUrl: './filtro-ciudad.component.html',
  styleUrls: ['./filtro-ciudad.component.css']
})
export class FiltroCiudadComponent implements OnInit {
  cities: Ciudad[];
  constructor() { }

  ngOnInit(): void {
  }

}
