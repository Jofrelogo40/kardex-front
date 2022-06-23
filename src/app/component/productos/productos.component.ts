import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {AccionesComponent} from "./grid/acciones/acciones.component";
import {Grid} from "./grid/grid";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [Grid],
})
export class ProductosComponent implements OnInit {

  /**
   * Grids
   */
  gridConsultaProductos = {
    columnsDef: null,
    gridComponents: null,
    defaultColDef: null,
    gridColumnApi: null,
    gridApi: null,
    rowData: []
  };

  gridOptions: GridOptions | any;
  totalRows: number | any;
  context: any;

  constructor(
    private productosServices: ProductosService,
    private gridDefinition: Grid,
  ) {
    this.configurarGrids();
  }

  ngOnInit(): void {

    this.consultarProductos();
  }

  consultarProductos () {
    this.productosServices.consultarProductos().subscribe((data) => {

      if (data) {
        this.gridConsultaProductos.rowData = data;
        console.log('PRODUCTO: ', data);
      }
    }, (error: any) => {
      console.log(error);
    });
  }

  private configurarGrids() {
    this.gridOptions = {context: {componentParent: this}};
    this.gridConsultaProductos.columnsDef = this.gridDefinition.columnDefs;
    // @ts-ignore
    this.gridConsultaProductos.gridComponents = {
      accionesRenderer: AccionesComponent
    };
    // @ts-ignore
    this.gridConsultaProductos.defaultColDef = {
      resizable: true
    };
  }

  /**
   * Permite asignar las configuraciones de la grid
   */
  onGridReady(params: any) {
    this.gridConsultaProductos.gridApi = params.api;
    this.gridConsultaProductos.gridColumnApi = params.columnApi;
  }

}