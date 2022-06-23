import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {exposedApi} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  PRODUCTOS_API = exposedApi.MAESTROS;

  constructor(private httpClient: HttpClient) {
  }

  consultarProductos() {
    return this.httpClient.get<any>(
      this.PRODUCTOS_API + '/productos');
  }
}
