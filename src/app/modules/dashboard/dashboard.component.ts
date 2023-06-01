import { AfterViewInit, Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  responseMessage: any;
  data: any;

  ngAfterViewInit(): void {
  }

  constructor(
    private dashboardService: DashboardService,
    private spinnerService: SpinnerService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService
  ) {
    // this.spinnerService.addLoading('dashboard');
    this.ngxService.start();
    this.dashboardData();
  }

  dashboardData() {
    this.dashboardService.getDetail().subscribe((res: any) => {
      // this.spinnerService.clearLoading('dashboard');
      this.ngxService.stop();
      this.data = res;
    }, (error: any) => {
      // this.spinnerService.clearLoading('dashboard');
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

}
