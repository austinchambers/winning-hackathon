import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client'

@Component({
  selector: 'client-component',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent {

  @Input()
  public client: Client;

  public isClientView: boolean = false;

  public tableView: boolean = true;
  public graphicView: boolean = false;

  public clientClicked(){
    console.log("client clicked");
    this.isClientView = true;
  }

  public backButtonClicked(){
    console.log("back clicked");
    this.isClientView = false;
  }

  public enableTableView()
  {
    console.log("table view enable");
    this.tableView = true;
    this.graphicView = false;
  }

  public enablegraphicView(){
    console.log("graphic view enable");
    this.tableView = false;
    this.graphicView = true;
  }

}
