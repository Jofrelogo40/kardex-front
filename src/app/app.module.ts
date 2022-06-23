import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import {UsuariosComponent} from "./component/usuarios/usuarios.component";
import {AppRoutingModule} from "./app.routers";
import { BlockUIModule } from 'ng-block-ui';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helper/interceptor";
import { StoreComponent } from './component/store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './component/productos/productos.component';
import { AgGridModule } from 'ag-grid-angular';
import {AccionesComponent} from "./component/productos/grid/acciones/acciones.component";
import {CrearProductoComponent} from "./component/popups/crear-producto/crear-producto.component";


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    StoreComponent,
    ProductosComponent,
    AccionesComponent,
    CrearProductoComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
