import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard2Guard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.login) {
    console.log("true ");
    return true;
  } else {
    console.log("false");
    return router.createUrlTree(['/login']);
  }
};
