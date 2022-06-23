import { ElementRef, Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';

export const FORMATO_FECHA_UNICO = 'DD/MM/YYYY';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  mensajeDialog(titulo: string, mensaje: string, icon: any, callBack = null,
                returnFocusParam = true) {
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon,
      returnFocus: returnFocusParam,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonColor: '#dfc326',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (callBack) {

      }
    });
  }

  dialogError(error: any) {
    return this.mensajeDialog(
      'Información',
      error.error ? error.error.error : error.message,
      'error'
    );
  }

  dialogSuccess(respuesta: any) {
    return this.mensajeDialog('Información', respuesta.message, 'success');
  }

  dialogConfirmacion(titulo: string, mensaje: string, icon: any) {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: titulo,
        text: mensaje,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#dfc326',
        cancelButtonColor: '#c22625',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  staticError(): any {
    return {
      message: 'Ha ocurrido un error, intentelo más tarde.',
      status: 500,
    };
  }

  /**
   *
   * @param meses cantidad de meses a restar
   * @param fecha fecha en formato dd/MM/yyyy
   */
  restarMeses(meses: number, fecha: string) {
    return moment(fecha).subtract(meses, 'months');
  }

  overlayAgGridLoading() {
    return '<span class="ag-overlay-loading-center">Consultado, por favor espere...</span>';
  }

  overlayAgGridNoRows() {
    return '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No se encontraron registros.</span>';
  }

  /**
   * Establecer foco en el input
   * @param name nombre del input con la propiedad name
   * @param form formulario donde se encuentra el input
   */
  setFocus(name: string | number, form: ElementRef) {
    const ele = form.nativeElement[name];
    if (ele) {
      ele.focus();
    }
  }
}
