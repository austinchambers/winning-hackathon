import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import {HttpClient} from '@angular/common/http';
import { Client } from '../client';
import { Connection } from '../connection';
//import { clientItem, connectionItem } from '../clientItem';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  templateUrl: 'connections.component.html',
  styleUrls: ['connections.component.css']
})
export class ConnectionsComponent {

  @ViewChild('clientView') clientView: ClientComponent;

  constructor(private http: HttpClient) {}

  public isClientView: boolean = false;

  public sampleConnection = new Connection("Sean", "Kushan", 8);

  public testClient = new Client("Apple", [this.sampleConnection]);

  public clientArray: Array<Client> = [];

  public activeClient: Client = this.testClient;

  public rawData: any;



  /**
   * Calls lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit() {
    // Make the HTTP request:
    this.http.get('http://192.168.255.214:3000').subscribe(data => {
      // Read the result field from the JSON response.
      console.log("data", data);
      this.rawData = data;

      this.parseClientData(this.rawData);
      //console.log(this.clientArray);
    });

  }

  private parseClientData(rawData){
    rawData.forEach((client: clientItem, index: number) => {
      let connectionArray: Array<Connection> = [];
      client.connections.forEach((connection: connectionItem, index: number) => {
        connectionArray.push(new Connection(connection.ourRep, connection.theirRep, connection.strength))
      });
      this.clientArray.push(new Client(client.name, connectionArray));
    });
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

interface clientItem {
  name: string,
  connections: Array<connectionItem>
}

interface connectionItem {
  ourRep: string,
  theirRep: string,
  strength: number
}
