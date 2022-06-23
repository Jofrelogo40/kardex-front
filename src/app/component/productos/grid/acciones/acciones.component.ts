import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css'],
})

export class AccionesComponent implements ICellRendererAngularComp {

  public params: any;
  private context: any;

  agInit(params: any): void {
    this.params = params;
    this.context = this.params.context;
  }

  refresh(): boolean {
    return false;
  }

  editar() {
    this.context.componentParent.editarMatricula(this.params.data);
  }

  eliminar() {
    this.context.componentParent.inhabilitarMatricula(this.params.data);
  }
}
