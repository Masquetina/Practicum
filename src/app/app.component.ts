import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { TopNavComponent } from "./top-nav";
import { ItemService } from "./protected/item.service";

@Component({
  moduleId: module.id,
  selector: 'todo-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, TopNavComponent],
  providers: [ItemService]
})

export class AppComponent {

}
