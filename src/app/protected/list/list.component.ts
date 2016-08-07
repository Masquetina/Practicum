import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { Item } from "../item";
import { ItemComponent } from "./item.component";
import { ItemService } from "../item.service";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'list.component.html',
  directives: [ItemComponent, ROUTER_DIRECTIVES]
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }
}
