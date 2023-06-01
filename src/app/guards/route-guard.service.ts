import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import jwt_decode from 'jwt-decode'
import { GlobalConstants } from '../shared/global-constants';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data['expectedRole'];
    const token: any = localStorage.getItem('token');
    if (!token) {
      this.snackbarService.openSnackBar(GlobalConstants.pleaseLogin, GlobalConstants.error);
      this.router.navigate(['/']);
      return false
    }
    var tokenPayload: any;
    try {
      tokenPayload = jwt_decode(token);
    } catch {
      localStorage.clear();
      this.router.navigate(['/']);
      this.snackbarService.openSnackBar(GlobalConstants.tokenInvalid, GlobalConstants.error);
      return false;
    }
    let checkRole = false;

    for (let i = 0; i < expectedRoleArray.length; i++) {
      if (expectedRoleArray[i] === tokenPayload.role) {
        checkRole = true;
      }
    }

    if (checkRole) {
      return true;
    } else {
      this.snackbarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
      this.router.navigate(['/']);
      return false;
    }
  }
}
