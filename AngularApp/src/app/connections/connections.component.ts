import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { Client } from '../client';
import { Connection } from '../connection';

@Component({
  templateUrl: 'connections.component.html',
  styleUrls: ['connections.component.css']
})
export class ConnectionsComponent {

  @ViewChild('clientView') clientView: ClientComponent;

  constructor( ) { }

  public isClientView: boolean = false;

  public sampleConnection = new Connection("Sean", "Kushan", 8);

  public sampleConnection2 = new Connection("Fabio", "Austin", 5);

  public sampleConnection3 = new Connection("Brian", "Bob", 2);

  public testClient = new Client("Apple", [this.sampleConnection]);

  public testClient2 = new Client("Microsoft", [this.sampleConnection2]);

  public testClient3 = new Client("Google", [this.sampleConnection3]);

  public clientArray: Array<Client> = [this.testClient, this.testClient2, this.testClient3];

  public activeClient: Client = this.clientArray[0];


  /**
   * Calls lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit() {

  }

  public clientClicked(event){
    let activeClientName = event.path[1].cells[1].innerText;
    this.activeClient = this.clientArray.find(client => client.name == activeClientName);
    //console.log(this.activeClient);
    this.isClientView = true;
  }

  public backButtonClicked(){
    //console.log("back clicked");
    this.isClientView = false;
  }

}
