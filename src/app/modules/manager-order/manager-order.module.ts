import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerOrderRoutingModule } from './manager-order-routing.module';
import { ManagerOrderComponent } from './manager-order.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ManagerOrderComponent
  ],
  imports: [
    CommonModule,
    ManagerOrderRoutingModule,
    SharedModule
  ]
})
export class ManagerOrderModule { }
