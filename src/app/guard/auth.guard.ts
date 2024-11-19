import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authSrv = inject(AuthService);
  const router = inject(Router)
  let user = authSrv.currentUser();
  const isDashboardRoute = state.url === '/dashboard' || state.url.startsWith('/dashboard/');
  
  if (user && !isDashboardRoute) {
    router.navigate(['/dashboard']);
    return false;
  }

  if (!user) {
    router.navigate(['/auth']);
    return false;
  }
  
  return true;

};
