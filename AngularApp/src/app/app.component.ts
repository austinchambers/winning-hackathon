import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  results: string[];

  constructor() {}

  ngOnInit(): void {}
}
