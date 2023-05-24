import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
