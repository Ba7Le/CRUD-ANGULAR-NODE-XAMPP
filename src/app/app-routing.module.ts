import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/component/layout/layout.component';
import { PageNotFoundComponent } from './core/component/statis-page/page-not-found/page-not-found.component';
import { BREADCRUMBS } from './core/constants/breadcrumb.constant';
import { RouteGuardService } from './guards/route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'

      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        data: {
          breadcrumb: BREADCRUMBS.home
        }
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [RouteGuardService],
        data: {
          breadcrumb: BREADCRUMBS.dashboard,
          expectedRole: ['admin', 'user']
        }
      },
      {
        path: 'manager-category',
        loadChildren: () => import('./modules/manager-category/manager-category.module').then(m => m.ManagerCategoryModule),
        canActivate: [RouteGuardService],
        data: {
          breadcrumb: BREADCRUMBS.managerCategory,
          expectedRole: ['admin']
        }
      },
      {
        path: 'manager-product',
        loadChildren: () => import('./modules/manager-product/manager-product.module').then(m => m.ManagerProductModule),
        canActivate: [RouteGuardService],
        data: {
          breadcrumb: BREADCRUMBS.managerProduct,
          expectedRole: ['admin']
        }
      },
      {
        path: 'manager-order',
        loadChildren: () => import('./modules/manager-order/manager-order.module').then(m => m.ManagerOrderModule),
        canActivate: [RouteGuardService],
        data: {
          breadcrumb: BREADCRUMBS.managerOrder,
          expectedRole: ['admin']
        }
      },
      {
        path: 'view-bill',
        loadChildren: () => import('./modules/view-bill/view-bill.module').then(m => m.ViewBillModule),
        canActivate: [RouteGuardService],
        data: {
          breadcrumb: BREADCRUMBS.viewBill,
          expectedRole: ['admin']
        }
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
