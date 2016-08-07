import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from "@angular/router";

import { Item } from "../item";
import {Subscription} from "rxjs";
import { ItemService } from "../item.service";

@Component({
  moduleId: module.id,
  selector: 'todo-detail',
  templateUrl: 'detail.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailComponent implements OnInit, OnDestroy {
  selectedItem: Item;
  private itemIndex: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.itemIndex = params['id'];
        this.selectedItem = this.itemService.getItem(this.itemIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
