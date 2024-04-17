import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-consultar-nuevo',
  templateUrl: './usuario-consultar-nuevo.component.html',
  styleUrls: ['./usuario-consultar-nuevo.component.css']
})
export class UsuarioConsultarNuevoComponent implements OnInit {
  //cambios para paginacion
  //users: Array<any>;
/*  users: Usuario[];
  totalPages: Array<number>;
  page = 0;
  size = 5;
  order = 'name';
  asc = true;
  isFirst = false;
  isLast = false;*/
  //paginacion
  usuario: Usuario[]; 
  p: number = 1
  total: number = 0;

  //displayedColumns: string[] = ['idUser', 'name', 'lastnameDad', 'lastnameMom', 'rolDto', 'token' ];
  //dataSource = new MatTableDataSource<Usuario>(DATA);

  constructor(private servicio:usuarioService, private router:Router) { }
 
  ngOnInit(): void {
    this.listarUsuarios();
    //this.listarUsuariosPag();
  }

  private listarUsuarios(){
    this.servicio.obtenerListaDeUsuarios().subscribe(dato=>{
      this.usuario = dato;
    });
  }


  //cambios de paginacon
 /* private listarUsuariosPag(){
    this.servicio.getUsers(this.page, this.size).subscribe(dato =>{
      this.users = dato.content;
      this.isFirst = dato.first;
      this.isLast = dato.last;
      this.totalPages = new Array(dato['totalPages']);
      console.log(dato);
    },
    err => {
      console.log(err.error);
    });
  }
 
  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.listarUsuariosPag();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.listarUsuariosPag();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.listarUsuariosPag();
  }*/

  //paginacion


  eliminarUsuario(id:number){
    let condicion = confirm("Estas seguro de querer eliminar el registro?");
      if(condicion == true){
        this.servicio.eliminarUsuarios(id).subscribe(dato=>{
          console.log(dato);
          
          alert("Registro Eliminado");
          this.listarUsuarios();
        })
      }
    
  }

  actualizar(id:number){
    this.router.navigate(['actualizar-usuario', id]);
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.listarUsuarios();
   }
}
 