import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authSrv = inject(AuthService);
  
  let currentUser = authSrv.currentUser();
  if (currentUser && currentUser.token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    });
  }
  return next(req);
};
