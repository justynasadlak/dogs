import { Component, OnInit } from '@angular/core';
import { NavItem } from '../nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-overview',
  templateUrl: './sidenav-overview.component.html',
  styleUrls: ['./sidenav-overview.component.scss']
})
export class SidenavOverviewComponent implements OnInit {

  navItems: NavItem[] = [{
    displayName: 'My Profile',
    route: 'my-profile'
  },
    {
      displayName: 'Dog Creator',
      route: 'my-profile/dog-creator'
    },
    {
      displayName: 'Dog table',
      route: 'my-profile/dogs-list'
    }
  ];

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  onItemSelected(item: NavItem) {
    this.router.navigate([item.route]);
  }
}
