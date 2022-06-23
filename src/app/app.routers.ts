import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {
  AuthGuardService,
  AuthValidateLoginPageService as AuthValidateLogin
} from '../services/security/auth-guard.service';
import {ROUTES} from '../shared/route/paths';

import {
  ConsecutivosMatriculaPricipalComponent
} from './consecutivos-matricula-pricipal/consecutivos-matricula-pricipal.component';

const ROUTERS: Routes = [

  {path: ROUTES.consultaMatriculas, component: ConsecutivosMatriculaPricipalComponent},

  {
    path: ROUTES.login,
    component: LoginComponent,
    canActivate: [AuthValidateLogin],
  },
  {
    path: '**', component: ConsecutivosMatriculaPricipalComponent, canActivate: [AuthGuardService], data: {
      reuse: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS, {useHash: true})],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
