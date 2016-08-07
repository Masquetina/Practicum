import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-start-component',
  template: `
    <h2>Select an item from the list above...</h2>
  `,
  styles: [`

  `]
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
