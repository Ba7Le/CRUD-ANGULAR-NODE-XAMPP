import { Component } from '@angular/core';
import { SIDE_NAV_ITEMS } from 'src/app/core/constants/sidenav.constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  sideMenuItems = SIDE_NAV_ITEMS;

}
