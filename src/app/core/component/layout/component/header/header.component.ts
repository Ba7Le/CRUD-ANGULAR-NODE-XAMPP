import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from 'src/app/core/constants/common.constant';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CheckTokenService } from 'src/app/services/checkToken.service';
import { ConfirmComponent } from 'src/app/shared/dialogs/confirm/confirm.component';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langArray: string[] = LANGUAGES;
  currentLanguage: string = 'EN';

  constructor(
    private translateService: TranslateService,
    public dialog: MatDialog,
    public checkTokenService: CheckTokenService,
    private router: Router
  ) { }

  switchLanguage(lang: string) {
    this.translateService.use(lang); // Switch the language dynamically
  }

  changeLang(lang: string) {
    this.currentLanguage = lang;
    this.switchLanguage(lang.toLowerCase());
  }

  openSingupDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openLoginDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openForgotPasswordDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  logoutFn(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { message: 'logout' }
    });
    dialogRef.afterClosed().subscribe((message) => {
      if (message) {
        this.router.navigate(['/']);
        localStorage.removeItem('token');
      }
    })
  }

  changePasswordFn(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration
    })
    dialogRef.afterClosed().subscribe((res) => {

    })
  }

}
