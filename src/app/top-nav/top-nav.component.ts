import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { CORE_DIRECTIVES } from '@angular/common';

import { DROPDOWN_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap';
import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'todo-top-nav',
  templateUrl: 'top-nav.component.html',
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES, CollapseDirective]
})

export class TopNavComponent implements OnInit {
  public isCollapsed: boolean;
  public innerWidth: number = window.innerWidth;

  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.innerWidth <= 768 ? this.isCollapsed = true
      : this.isCollapsed = false;
  }

  onResize(event) {
    event.target.innerWidth <= 768 ? this.isCollapsed = true
      : this.isCollapsed = false;
  }
}
