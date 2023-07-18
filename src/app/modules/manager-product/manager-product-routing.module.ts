import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerProductComponent } from './manager-product.component';

const routes: Routes = [{ path: '', component: ManagerProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerProductRoutingModule { }
