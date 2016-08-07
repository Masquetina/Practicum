import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { Item } from "../item";

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() itemId: number;

  constructor() { }

  ngOnInit() {
  }

}
