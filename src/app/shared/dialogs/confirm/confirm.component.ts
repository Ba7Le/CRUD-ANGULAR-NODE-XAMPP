import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  deleteVariable: string = 'delete';

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public translate: TranslateModule,
    private ngxService: NgxUiLoaderService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleConfirm() {
    if (this.data.message === 'delete') {
      this.ngxService.start();
    }
    this.dialogRef.close(true);
  }
}
