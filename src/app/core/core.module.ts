import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/layout/component/header/header.component';
import { BreadcrumbComponent } from './component/layout/component/breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './component/statis-page/page-not-found/page-not-found.component';
import { SignupComponent } from './component/layout/component/signup/signup.component';
import { SidenavComponent } from './component/layout/component/sidenav/sidenav.component';
import { SpinnerComponent } from './component/layout/component/spinner/spinner.component';
import { SplashScreenComponent } from './component/layout/component/splash-screen/splash-screen.component';
import { LoginComponent } from './component/layout/component/login/login.component';
import { ForgotPasswordComponent } from './component/layout/component/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    SignupComponent,
    SidenavComponent,
    SpinnerComponent,
    SplashScreenComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
