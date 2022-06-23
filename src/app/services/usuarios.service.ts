import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {exposedApi} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  USUARIOS_API = exposedApi.MAESTROS;

  constructor(private httpClient: HttpClient) {
  }

  getVersion(ok: string) {
    return this.httpClient.post<any>(this.USUARIOS_API + "/usuarios/version", ok);
  }

  consultarUsuario(id: any) {
    return this.httpClient.get<any>(
      this.USUARIOS_API + '/usuarios/'+ id, );
  }

}
