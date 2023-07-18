import { ChangeDetectorRef, Component, Inject, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AddCategoryComponent } from '../../manager-category/add-category/add-category.component';
import { ProductService } from 'src/app/services/product.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { ProductM } from '../model/Product.model'
import { CategoryService } from 'src/app/services/category.service';
import { Category, CategoryResponse } from '../interface/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm: any = FormGroup;
  categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productService: ProductService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    private categoryService: CategoryService,
  ) {
    this.getAllCategories();
  }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: [this.data.name ? this.data.name : null, [Validators.required]],
      category: [this.data.category ? this.data.category : null, [Validators.required]],
      price: [this.data.price ? this.data.price : null, [Validators.required]],
      description: [this.data.description ? this.data.description : null, [Validators.required]]
    })
  }

  getAllCategories() {
    this.ngxService.start();
    this.categoryService.getAll().subscribe(
      (res: any) => {
        this.ngxService.stop();
        this.categories = res;
      },
      (err: any) => {
        this.ngxService.stop();
      })
  }

  handleAddProduct() {
    let payload = new ProductM(this.addProductForm.getRawValue())
    this.ngxService.start();
    this.productService.add(payload).subscribe(
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

  handleUpdateProduct() {
    let payload = {
      name: this.addProductForm.get('name').value,
      id: this.data['id']
    }
    this.ngxService.start();
    this.productService.update(payload).subscribe(
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
