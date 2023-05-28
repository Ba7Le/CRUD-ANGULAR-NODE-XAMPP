import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/layout/component/header/header.component';
import { BreadcrumbComponent } from './component/layout/component/breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './component/statis-page/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
