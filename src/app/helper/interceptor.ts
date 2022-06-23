import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {LocalService} from '../services/local.service';
import {UtilService} from '../services/util.service';
import {Router} from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private countRequest = 0;
  @BlockUI() blockUI!: NgBlockUI;


  constructor(
    private localService: LocalService,
    private utilService: UtilService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (!this.countRequest) {
      this.blockUI.start('Cargando aplicación, por favor espere...');
    }
    this.countRequest++;
    const token: string = this.localService.getJsonValue('token');
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `${ token }`
        }
      });
    }
    // add authorization header with jwt token if available
    return next.handle(request).pipe(
      finalize(() => {
        this.countRequest--;
        if (!this.countRequest) {
          this.blockUI.stop();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.blockUI.stop();
        if (error.status === 401){
          this.utilService.mensajeDialog(
            'Informativo',
            'Su sesión a expirado, el token de segurtidad ya no es válido',
            'warning'
          );
          localStorage.clear();
          const currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
          });
        }
        return throwError(error);
      })
    );
  }
}
