// auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false; // Default to false as user is initially not authenticated

  constructor(private router: Router) { }

  login(username: string, pass: string): boolean {
    if (username === "abc" && pass === '123') {
      console.log("login");
      this.isAuth = true; // Set authentication status to true
      this.router.navigate(['/dashboard']); // Navigate to authenticated dashboard
      return true;
    } else {
      return false;
    }
  }

  signup(username: string, pass: string):boolean{
    localStorage.setItem(username,pass);
    this.isAuth = true
    this.router.navigate(['/dashboard'])
    return true
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }

  logout(): void {
    
    this.isAuth = false;
    this.router.navigate(['/login'])
  }
}
