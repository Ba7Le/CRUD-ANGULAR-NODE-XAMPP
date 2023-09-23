import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBillComponent } from './view-bill.component';

const routes: Routes = [{ path: '', component: ViewBillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBillRoutingModule { }
