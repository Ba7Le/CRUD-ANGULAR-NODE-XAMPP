import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService,
    private spinnerService: SpinnerService
  ) { }
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]]
    })
  }

  handleSubmit() {
    // this.spinnerService.addLoading('forgot-password');
    this.ngxService.start();
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email
    }
    this.userService.forgotPassword(data).subscribe((response: any) => {
      // this.spinnerService.clearLoading('forgot-password');
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.dialogRef.close();
      this.snackBarService.openSnackBar(this.responseMessage, '');
    }, (error) => {
      // this.spinnerService.clearLoading('forgot-password');
      this.ngxService.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
