import { Injectable } from '@angular/core';

import { Item } from "./item";
import { Comment } from "./comment";

@Injectable()
export class ItemService {
  private items: Item[] = [
    new Item('First Dummy Data Heading', 'Dummy Data Text', [
      new Comment('Dummy Comment'),
      new Comment('Another Dummy Comment'),
    ]),
    new Item('Second Dummy Data Heading', 'Second Dummy Data Text', []),
    new Item('Third Dummy Data Heading', 'Third Dummy Data Text', [
      new Comment('One more Dummy Comment'),
    ]),
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items[id];
  }

}
