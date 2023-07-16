import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerCategoryComponent } from './manager-category.component';

const routes: Routes = [{ path: '', component: ManagerCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerCategoryRoutingModule { }
