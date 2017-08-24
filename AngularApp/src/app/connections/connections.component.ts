import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'connections.component.html',
  styleUrls: ['connections.component.css']
})
export class ConnectionsComponent {

  constructor( ) { }

  public isClientView: boolean = false;

  public clientClicked(){
    console.log("client clicked");
    this.isClientView = true;
  }

  public backButtonClicked(){
    console.log("back clicked");
    this.isClientView = false;
  }

}
