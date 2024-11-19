import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AlertsService } from '@services/notification/alerts.service';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const alertSrv = inject(AlertsService);
  const router = inject(Router)
  
  return next(req).pipe(
    catchError((err) => {

      if (err.status === 401) {
        router.navigate(["/unauthorized"]);
      }

      if (err.status === 500 || err.status === 400) {
        alertSrv.showError(err.error.message);
      }
      
      if (err.status === 403) {
        // this.router.navigate(["**"]);
      }

      if (err.status === 0) {
        alertSrv.showError("Error de conexión");
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    })
  );
  
};
