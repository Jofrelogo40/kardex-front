import {Injectable} from '@angular/core';
import {ParametrosSharedService} from './parametros/parametros.shared.service';
import {UsuarioSharedService} from './usuario/usuario.shared.service';

@Injectable({
  providedIn: 'root',
})
export class DataSharedService {
  private configuracionIniciada = false;

  private initialData: any;

  constructor(
    private parametrosSharedService: ParametrosSharedService,
    private usuarioSharedService: UsuarioSharedService
  ) {
  }

  public getParametrosSharedService(): ParametrosSharedService {
    return this.parametrosSharedService;
  }

  public setConfiguracionIniciada(configuracionIniciada: boolean) {
    this.configuracionIniciada = configuracionIniciada;
  }

  public isConfiguracionIniciada(): boolean {
    return this.configuracionIniciada;
  }

  public setInitialData(initialData: any) {
    this.initialData = initialData;
  }

  public getInitialData() {
    return this.initialData;
  }

  public getUsuarioSharedService(): UsuarioSharedService {
    return this.usuarioSharedService;
  }
}
