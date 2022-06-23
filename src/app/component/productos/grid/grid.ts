import { Injectable } from '@angular/core';

@Injectable()
export class GridConsultaConsecutivos {

  columnDefs: any = [
    {
      headerName: 'Acciones',
      cellRenderer: 'accionesRenderer',
      pinned: 'left',
      colId: 'actions',
      suppressMovable: true,
      cellStyle: { textAlign: 'center' },
      maxWidth: 180,
    },
    {
      headerName: 'Unidad de negocio',
      field: 'unidadNegocioDesc',
      resizable: true,
      suppressMovable: true,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Tipo documento',
      field: 'tipoDocumentoDesc',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Contado en origen',
      field: 'contadoOrigen',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Descripción',
      field: 'descripcion',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Fecha',
      field: 'abreviatura',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Naturaleza',
      field: 'naturalezaDes',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Estado',
      field: 'estadoDesc',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Centro de operacion',
      field: 'centroOperacion',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Prefijo',
      field: 'modeloPrefijo',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Valor inicial',
      field: 'modeloValorInicial',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Valor final',
      field: 'modeloValorFinal',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Sufijo',
      field: 'modeloSufijo',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    }
  ];
}
