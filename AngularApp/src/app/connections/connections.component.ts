import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { Client } from '../client';
import { Connection } from '../connection';

@Component({
  templateUrl: 'connections.component.html',
  styleUrls: ['connections.component.css','../../../node_modules/nvd3/build/nv.d3.css']
})
export class ConnectionsComponent {

  @ViewChild('clientView') clientView: ClientComponent;

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
