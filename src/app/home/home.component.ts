import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.userService.checkToken().subscribe((rs: any) => {
        this.router.navigate(['/cafe/dashboard']);
      }, (error: any) => {
        console.log(error);
      })
    }
  }

  signupAction() {
    const dialogRef = this.dialog.open(SignupComponent, {
      data: { name: '' },
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog SignupComponent was closed');
    });
  }

  forgotPasswordAction() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      data: { name: '' },
      width: "600px"
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog ForgotPasswordComponent was closed');
    })
  }

  loginAction() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { name: '' },
      width: "600px"
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog LoginComponent was closed');
    })
  }

}
