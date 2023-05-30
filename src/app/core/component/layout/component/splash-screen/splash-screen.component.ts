import { AfterViewInit, Component } from '@angular/core';
import { Subject, of, takeUntil, delay } from 'rxjs';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements AfterViewInit {
  logoOpacity: number;
  private readonly _unsubscribe$ = new Subject();
  private MS_DELAY_APP = 50; // delay 50 milisecond show splash screen animation

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    of(true).pipe(
      takeUntil(this._unsubscribe$),
      delay(this.MS_DELAY_APP)
    ).subscribe(_ => {
      this.logoOpacity = 1;
    })
  }
}
