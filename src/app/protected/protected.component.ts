import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { ListComponent } from "./list/list.component";

@Component({
  moduleId: module.id,
  selector: 'todo-protected',
  templateUrl: 'protected.component.html',
  directives: [ListComponent, ROUTER_DIRECTIVES]
})
export class ProtectedComponent {

}
