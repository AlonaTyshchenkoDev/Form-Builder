import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(): boolean{
    if (this.authService.isAuthenticated()) {
      return true
    }

    this.authService.logOut();
    this.router.navigate(['/login']).then();
    return false;
  }
}
