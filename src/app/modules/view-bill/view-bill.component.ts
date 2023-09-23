import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { ViewBillProductComponent } from './view-bill-product/view-bill-product.component';
import { ConfirmComponent } from 'src/app/shared/dialogs/confirm/confirm.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent {
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'paymentMethod', 'total', 'view'];
  dataSource: any;
  responseMessage: any;

  constructor(
    private billService: BillService,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackBarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.billService.getBills().subscribe((res: any) => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(res);
    }, (err: any) => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleViewAction(enterAnimationDuration: string, exitAnimationDuration: string, values: any) {
    debugger
    const dialogRef = this.dialog.open(ViewBillProductComponent, {
      width: '950px',
      enterAnimationDuration,
      exitAnimationDuration,
      autoFocus: false,
      data: {
        data: values
      }
    });

    dialogRef.afterClosed().subscribe(async (message) => {
      if (message) {
        try {
          this.snackBarService.openSnackBar(message, '');
        } catch (error) {
          this.snackBarService.openSnackBar('Error occurred while fetching categories', GlobalConstants.error);
        }
      }
    })
  }

  downloadReportAction(value: any) {
    this.ngxService.start();
    var data = {
      name: value.name,
      email: value.email,
      uuid: value.uuid,
      contactNumber: value.contactNumber,
      paymentMethod: value.paymentMethod,
      totalAmount: value.total,
      productDetails: value.productDetails
    }
    this.billService.getPdf(data).subscribe((res) => {
      saveAs(res, value.uuid + '.pdf');
      this.ngxService.stop();
    })
  }

  handleDeleteAction(enterAnimationDuration: string, exitAnimationDuration: string, value: any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        message: 'delete'
      }
    })

    dialogRef.afterClosed().subscribe((isConfirm) => {
      if (isConfirm) {
        this.ngxService.start();
        this.billService.delete(value.id).subscribe((res: any) => {
          this.ngxService.stop();
          this.tableData();
          this.responseMessage = res?.message;
          this.snackBarService.openSnackBar(this.responseMessage, 'Success');
        }, (err: any) => {
          this.ngxService.stop();
          if (err.error?.message) {
            this.responseMessage = err.error?.message;
          } else {
            this.responseMessage = GlobalConstants.genericError;
          }
          this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
        })
      }
    })
  }
}




