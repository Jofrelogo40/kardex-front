import { Injectable } from '@angular/core';

@Injectable()
export class Grid {

  columnDefs: any = [
    {
      headerName: 'Referencia',
      field: 'referencia',
      resizable: true,
      suppressMovable: true,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Nombre',
      field: 'nombre',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Descripcion',
      field: 'descripcion',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Precio',
      field: 'precio',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Cantidad',
      field: 'cantidad',
      resizable: true,
      suppressMovable: false,
      filter: true,
      sortable: true,
    },
    {
      headerName: 'Acciones',
      cellRenderer: 'accionesRenderer',
      pinned: 'left',
      colId: 'actions',
      suppressMovable: true,
      cellStyle: { textAlign: 'center' },
      maxWidth: 180,
    },
  ];
}
