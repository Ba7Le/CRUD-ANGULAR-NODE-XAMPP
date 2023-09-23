import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBillRoutingModule } from './view-bill-routing.module';
import { ViewBillComponent } from './view-bill.component';
import { ViewBillProductComponent } from './view-bill-product/view-bill-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewBillComponent,
    ViewBillProductComponent
  ],
  imports: [
    CommonModule,
    ViewBillRoutingModule,
    SharedModule
  ]
})
export class ViewBillModule { }
