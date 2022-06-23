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

  crearProducto(data: any) {
    return this.httpClient.post<any>(
      this.PRODUCTOS_API + '/productos', data);
  }

  consultarProductos() {
    return this.httpClient.get<any>(
      this.PRODUCTOS_API + '/productos');
  }
}
