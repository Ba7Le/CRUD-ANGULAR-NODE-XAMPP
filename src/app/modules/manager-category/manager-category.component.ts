import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Category } from './interface/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmComponent } from 'src/app/shared/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-manager-category',
  templateUrl: './manager-category.component.html',
  styleUrls: ['./manager-category.component.scss']
})
export class ManagerCategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<Category>;
  responseMessage: string;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private categoryService: CategoryService,
    private ngxService: NgxUiLoaderService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {
    this.getAllCategories();
  }

  async getAllCategories(): Promise<boolean> {
    this.ngxService.start();

    try {
      const res: any = await this.categoryService.getAll().toPromise();
      this.ngxService.stop();

      const categories: Category[] = res;
      this.dataSource = new MatTableDataSource(categories);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string, type?: string, name?: string, id?: string) {
    const title = type === 'add' ? 'Add Category' : 'Update Category';
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        name: name,
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(async (message) => {
      if (message) {
        try {
          const isReturn: boolean = await this.getAllCategories();
          if (isReturn) {
            this.snackbarService.openSnackBar(message, '');
          }
        } catch (error) {
          this.snackbarService.openSnackBar('Error occurred while fetching categories', GlobalConstants.error);
        }
      }
    })
  }

  confirmDeleteCategory(enterAnimationDuration: string, exitAnimationDuration: string, id: number) {
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
        this.categoryService.delete(id).subscribe(
          async (res: any) => {
            const isReturn: boolean = await this.getAllCategories();
            if (isReturn) {
              this.snackbarService.openSnackBar(res.message, '');
            }
          },
          (error: any) => {
            this.ngxService.stop();
            this.snackbarService.openSnackBar(GlobalConstants.genericError, GlobalConstants.error);
          }
        );
      }
    })
  }

}
