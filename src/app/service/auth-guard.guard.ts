import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import jwtDecode from 'jwt-decode';
import { SnackbarService } from './snackbar.service';
import { GlobalConstants } from '../shared/global-constants';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];
    const token: any = localStorage.getItem('token');
    var tokenPayload: any;
    try {
      tokenPayload = jwtDecode(token);
    } catch (err) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

    let checkRole = false;

    for (let i = 0; i < expectedRoleArray['length']; i++) {
      if (expectedRoleArray[i] === tokenPayload.role) {
        checkRole = true;
      }
    }

    if (tokenPayload.role === 'user' || tokenPayload.role === 'admin') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;
      }
      this.snackbarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
      this.router.navigate(['/cafe/dashboard']);
      return false;
    } else {
      localStorage.clear();
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}