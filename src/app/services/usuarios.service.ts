import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {exposedApi} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsecutivoMatriculaService {

  CONSECUTIVOS_API = exposedApi.HOST_MATRICULA_CONSECUTIVOS;

  constructor(private httpClient: HttpClient) {
  }

  consultarConsecutivos(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/listar-pag', data);
  }

  guardarGeneral(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/guardar-crear', data);
  }

  guardarAlarma(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/guardar-alarma', data);
  }

  consultarEstado(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/consultar-estado', data);
  }

  guardarResolucionAlarma(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/guardar-resolucion-alarma', data);
  }

  traerNuevoFinal(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/traer-nuevo-final', data);
  }

  consultarMatriculaContingencia(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivos/consultar-matriculas-contingencia', data);
  }

  consultarTrackingMatricula(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-observaciones/listar-tracking', data);
  }

  guardarObservacion(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-observaciones/grabar', data);
  }

  inactivarMatricula(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-observaciones/inactivar-consecutivo-matricula', data);
  }

  liberarConsecutivorMatricula(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-observaciones/liberar-consecutivo-matricula', data);
  }

  buscarAlarmaNotificacion(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/alarma-consecutivos/consulta-por-matricula', data);
  }

  buscarAlarmaAsignacion(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/alarma-consecutivos/consulta-por-asignacion', data);
  }

  consultarLiberarMatriculas(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/alarma-consecutivos/consultar-liberar-matricula', data);
  }

  buscarListaConstactoAlarma(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/contacto-alarma/listar-por-alarma', data);
  }

  eliminarContacto(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/contacto-alarma/borrar', data);
  }

  guardarDistribucion(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-distribucion/guardar-distribucion', data);
  }

  buscarAsignaciones(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-distribucion/listar-pag-asignaciones', data);
  }

  obtenerValorInicial(data: any) {
    return this.httpClient.post<any>(
      this.CONSECUTIVOS_API + '/matriculas/consecutivo-distribucion/obtener-valor-inicial', data);
  }
}
