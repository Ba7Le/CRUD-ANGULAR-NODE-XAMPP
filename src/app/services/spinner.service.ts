import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loading$: Subject<string[]> = new Subject();
  private loadingList: string[] = [];

  constructor() { }

  addLoading(action: string) {
    this.loadingList.push(action);
    this.loading$.next(this.loadingList);
  }
  clearLoading(action: string) {
    this.loadingList = this.loadingList.filter(loading => loading !== action);
    this.loading$.next(this.loadingList);
  }
  getLoading(): Observable<string[]> {
    return this.loading$.asObservable();
  }
}
