import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: '<h1>hi im angular 2 nativce component</h1>',
})
export class ListComponent implements OnInit {
  @Input() test: any;
  constructor() { }

  ngOnInit() {
    console.log(this.test)
  }

}
