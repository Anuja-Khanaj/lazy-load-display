

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private AuthService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.AuthService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['auth/login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}