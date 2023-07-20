import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerOrderComponent } from './manager-order.component';

const routes: Routes = [{ path: '', component: ManagerOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerOrderRoutingModule { }
