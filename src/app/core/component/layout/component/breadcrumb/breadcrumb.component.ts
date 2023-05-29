import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { BREADCRUMBS } from 'src/app/core/constants/breadcrumb.constant';
import { IBreadcrumb } from 'src/app/core/models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  private _unsubcribe$ = new Subject();

  currentPage: IBreadcrumb;
  breadcrumbs = BREADCRUMBS;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerSubscriber()
  }

  routerSubscriber(): void {
    for (const item in this.breadcrumbs) {
      if (this.breadcrumbs.hasOwnProperty(item)) {
        const breadcrumb = this.breadcrumbs[item as keyof typeof this.breadcrumbs];
        if (this.router.url.includes(breadcrumb.url)) {
          this.currentPage = breadcrumb;
          break;
        }
      }
    }
    this.router.events.pipe(
      takeUntil(this._unsubcribe$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.activatedRoute.children.length > 0) {
        this.currentPage = this.activatedRoute.children[0].snapshot.data as IBreadcrumb;
      }
    })
  }

  ngOnDestroy(): void {
    this._unsubcribe$.next(null);
    this._unsubcribe$.complete();
  }


}
