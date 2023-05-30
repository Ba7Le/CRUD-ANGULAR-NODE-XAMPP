import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, delay, map, of, takeUntil } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private readonly _unsubscribe$ = new Subject();
  spinner$: Observable<boolean>
  loadingSplashScreen = true;

  constructor(private _spinnerService: SpinnerService) {

  }

  ngOnInit(): void {
    this.getSpinner();
    of(true).pipe(
      takeUntil(this._unsubscribe$),
      delay(3000)
    ).subscribe(() => this.loadingSplashScreen = false);
  }

  getSpinner() {
    this.spinner$ = this._spinnerService.getLoading().pipe(
      map((loadingList: string[]) => {
        return loadingList.length > 0;
      }),
      takeUntil(this._unsubscribe$)
    )
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(null);
    this._unsubscribe$.complete();
  }

}
