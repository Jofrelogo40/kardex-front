import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(
    private usuariosServices: UsuariosService,
    private productosServices: ProductosService
  ) { }

  ngOnInit(): void {

  }

}
