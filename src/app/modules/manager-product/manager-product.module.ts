import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerProductRoutingModule } from './manager-product-routing.module';
import { ManagerProductComponent } from './manager-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    ManagerProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ManagerProductRoutingModule,
    SharedModule
  ]
})
export class ManagerProductModule { }
