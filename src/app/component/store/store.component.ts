import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(
    private usuariosServices: UsuariosService,
    private productosServices: ProductosService,
  ) { }

  products: any;

  ngOnInit(): void {
    this.versionBackend();
    this.consultarUsuario ();
  }

  versionBackend(){
    const ok = 'ok'
    this.usuariosServices.getVersion(ok).subscribe((data) => {
      const version = data.message;
      console.log(version);
    })
  }

  consultarUsuario () {
    this.productosServices.consultarProductos().subscribe((data) => {

      if (data) {
        this.products = data
        console.log('PRODUCTO: ', data);
      }
    }, (error: any) => {
      console.log(error);
    });
  }

  addCart() {
    console.log('añadir al carrito');
    // this.productClicked.emit(this.product.id);
  }

}
