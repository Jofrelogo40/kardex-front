import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductosService} from "../../../services/productos.service";
import {UtilService} from "../../../services/util.service";

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private productosServices: ProductosService,
    private utilService: UtilService,
  ) { }

  formProductos: FormGroup | any;

  ngOnInit(): void {
    this.construirFormulario()
  }

  /**
   * Permite crear un formulario con los campos aqui descritos
   */
  private construirFormulario() {

    this.formProductos = this.formBuilder.group({
      paramProducto: this.formBuilder.group({
        referencia: [],
        nombre: [],
        descripcion: [],
        precio: [],
        cantidad: [],
      }),
    });
  }

  guardarProducto(){

    const datos = this.formProductos.get('paramProducto').value;

    this.productosServices.crearProducto(datos).subscribe((data) => {
      if (data) {
        this.utilService.mensajeDialog('Información.',
          `El registro se ha almacenado correctamente.`, 'success');
        this.limpiar();
      }
    }, (error: any) => {
      console.log(error);
    });
  }

  limpiar() {
    this.formProductos.get('paramProducto').reset();
  }

}
