import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-manager-order',
  templateUrl: './manager-order.component.html',
  styleUrls: ['./manager-order.component.scss']
})
export class ManagerOrderComponent {
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total', 'delete'];
  dataSource: any = [];
  manageOrderForm: any = FormGroup;
  categories: any = [];
  products: any = [];
  price: any;
  totalAmount: number = 0;
  responseMessage: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private snacbarService: SnackbarService,
    private billService: BillService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getCategories();
    this.manageOrderForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      paymentMethod: [null, [Validators.required]],
      product: [null, [Validators.required]],
      category: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      total: [0, [Validators.required]]
    })
  }

  getCategories() {
    this.categoryService.getAll().subscribe((res: any) => {
      this.ngxService.stop();
      this.categories = res;
    }, (err: any) => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  getProductByCategory(value: any) {
    this.manageOrderForm.patchValue({
      product: null
    })
    this.productService.getProductsByCategory(value.id).subscribe((res: any) => {
      this.products = res;
      this.manageOrderForm.patchValue({
        price: '',
        quantity: '',
        total: 0
      })
    }, (err: any) => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  getProductDetails(value: any) {
    this.productService.getById(value.id).subscribe((res: any) => {
      this.price = res.price;
      this.manageOrderForm.patchValue({
        price: res.price,
        quantity: '1',
        total: this.price * 1
      })
    }, (err: any) => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  setQuantity(value: any) {
    let quantity = this.manageOrderForm.get('quantity')?.value;
    let price = this.manageOrderForm.get('price')?.value;
    if (quantity > 0) {
      this.manageOrderForm.patchValue({
        total: quantity * price
      })
    } else if (quantity !== '') {
      this.manageOrderForm.patchValue({
        quantity: 1,
        total: 1 * price
      })
    }
  }

  validateProductAdd() {
    let total = this.manageOrderForm.get('total')?.value;
    let quantity = this.manageOrderForm.get('quantity')?.value;
    if (total === 0 || total === null || quantity <= 0) {
      return true;
    } else {
      return false;
    }
  }

  validateSubmit() {
    let name = this.manageOrderForm.get('name')?.value;
    let email = this.manageOrderForm.get('email')?.value;
    let emailValid = this.manageOrderForm.get('email')?.valid;
    let contactNumber = this.manageOrderForm.get('contactNumber')?.value;
    let contactNumberValid = this.manageOrderForm.get('contactNumber')?.valid;
    let paymentMethod = this.manageOrderForm.get('paymentMethod')?.value;
    if (
      this.totalAmount === 0 ||
      name === null ||
      email === null ||
      contactNumber === null ||
      paymentMethod === null ||
      !contactNumberValid ||
      !emailValid
    ) {
      return true;
    } else {
      return false;
    }
  }

  add() {
    var formData = this.manageOrderForm.value;
    var productName = this.dataSource.find((e: { id: number; }) => e.id === formData.product.id);
    if (productName === undefined) {
      this.totalAmount = this.totalAmount + formData.total;
      this.dataSource.push(
        {
          id: formData.product.id,
          name: formData.product.name,
          category: formData.category.name,
          quantity: formData.quantity,
          price: formData.price,
          total: formData.total
        }
      );
      this.dataSource = [...this.dataSource];
      this.snacbarService.openSnackBar(GlobalConstants.productAdd, "success");
    } else {
      this.snacbarService.openSnackBar(GlobalConstants.productExistError, GlobalConstants.error);
    }
  }

  handleDeleteAction(value: any, element: any) {
    this.totalAmount = this.totalAmount - element.total;
    this.dataSource.splice(value, 1);
    this.dataSource = [...this.dataSource];
  }

  submitAction() {
    this.ngxService.start();
    var formData = this.manageOrderForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      paymentMethod: formData.paymentMethod,
      totalAmount: this.totalAmount,
      productDetails: JSON.stringify(this.dataSource)
    }
    this.billService.generateReport(data).subscribe((res: any) => {
      this.downloadFile(res?.uuid);
      this.manageOrderForm.reset();
      this.dataSource = [];
      this.totalAmount = 0;
    }, (err: any) => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  downloadFile(fileName: any) {
    var data = {
      uuid: fileName
    }
    this.billService.getPdf(data).subscribe((res: any) => {
      saveAs(res, fileName + '.pdf');
      this.ngxService.stop();
    })
  }
}
