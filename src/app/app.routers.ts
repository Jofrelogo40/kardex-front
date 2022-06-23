import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from '../app/shared/route/paths';
import {UsuariosComponent} from "./component/usuarios/usuarios.component";
import {StoreComponent} from "./component/store/store.component";
import {ProductosComponent} from "./component/productos/productos.component";


const ROUTERS: Routes = [

  {path: ROUTES.usuarios, component: UsuariosComponent},
  {path: ROUTES.tienda, component: StoreComponent},
  {path: ROUTES.productos, component: ProductosComponent},
  {path: '**', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS, {useHash: true})],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
