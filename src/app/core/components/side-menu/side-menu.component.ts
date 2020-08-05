import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SideMenuComponent implements OnInit {
  menus = [];

  constructor(
    private auth: AuthenticationService,
    public sidebarservice: SidebarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menus = this.sidebarservice.getMenuList();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

}
