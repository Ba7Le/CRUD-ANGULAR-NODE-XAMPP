import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerCategoryRoutingModule } from './manager-category-routing.module';
import { ManagerCategoryComponent } from './manager-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    ManagerCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    ManagerCategoryRoutingModule,
    SharedModule
  ]
})
export class ManagerCategoryModule { }
