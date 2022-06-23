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

  ampliar() {
    this.context.componentParent.abrirInformacionMatricula(this.params.data);
  }

  notificar() {
    this.context.componentParent.notificarMatricula(this.params.data);
  }

  editar() {
    this.context.componentParent.editarMatricula(this.params.data);
  }

  inhabilitar() {
    this.context.componentParent.inhabilitarMatricula(this.params.data);
  }

  inactivar() {
    this.context.componentParent.inactivarMatricula(this.params.data);
  }

  liberar() {
    this.context.componentParent.liberarMatricula(this.params.data);
  }
}
