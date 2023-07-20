import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductI, ProductPayloadI } from './interface/product.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ProductService } from 'src/app/services/product.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.scss']
})
export class ManagerProductComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'description', 'price', 'action'];
  dataSource: MatTableDataSource<ProductI>;
  responseMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ngxService: NgxUiLoaderService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private productService: ProductService
  ) {
    this.getAllProducts();
  }

  async getAllProducts(): Promise<boolean> {
    this.ngxService.start();

    try {
      const res: any = await this.productService.getAllProducts().toPromise();
      this.ngxService.stop();

      const products: ProductI[] = res;
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      return true;
    } catch (error: any) {
      this.ngxService.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.tokenInvalid;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      return false;
    }
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string, type?: string, row?: ProductI) {
    const title = type === 'add' ? 'Add Product' : 'Update Product';
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        name: row?.name,
        category: row?.categoryId,
        price: row?.price,
        description: row?.description
      }
    });

    dialogRef.afterClosed().subscribe(async (message) => {
      if (message) {
        try {
          const isReturn: boolean = await this.getAllProducts();
          if (isReturn) {
            this.snackbarService.openSnackBar(message, '');
          }
        } catch (error) {
          this.snackbarService.openSnackBar('Error occurred while fetching categories', GlobalConstants.error);
        }
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
