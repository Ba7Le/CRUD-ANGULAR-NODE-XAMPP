import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  addCategoryForm: any = FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
  ) { }

  ngOnInit() {
    this.addCategoryForm = this.fb.group({
      name: [this.data.name ? this.data.name : null, [Validators.required]]
    })
  }

  handleAddCategory() {
    let payload = {
      name: this.addCategoryForm.get('name').value
    }
    this.ngxService.start();
    this.categoryService.add(payload).subscribe(
      (res: any) => {
        this.dialogRef.close(res.message);
      },
      (err: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        setTimeout(() => {
          this.snackbarService.openSnackBar(GlobalConstants.genericError, GlobalConstants.error);
        }, 500);
      }
    )
  }

  handleUpdateCategory() {
    let payload = {
      name: this.addCategoryForm.get('name').value,
      id: this.data['id']
    }
    this.ngxService.start();
    this.categoryService.update(payload).subscribe(
      (res: any) => {
        this.dialogRef.close(res.message);
      },
      (err: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        setTimeout(() => {
          this.snackbarService.openSnackBar(GlobalConstants.genericError, GlobalConstants.error);
        }, 500);
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
