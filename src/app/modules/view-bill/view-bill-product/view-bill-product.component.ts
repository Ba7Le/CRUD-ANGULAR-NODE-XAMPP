import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bill-product',
  templateUrl: './view-bill-product.component.html',
  styleUrls: ['./view-bill-product.component.scss']
})
export class ViewBillProductComponent {
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total'];
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<ViewBillProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    debugger
    this.dataSource = JSON.parse(this.data.data.productDetails);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
