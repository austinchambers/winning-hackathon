import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Client} from '../client';
import {Connection} from '../connection';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http: HttpClient) {}

  public clientArray: Array<Client> = [];

  public rawData: any;

  /**
   * Calls lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit() {
    // // Make the HTTP request:
    // this.http.get('/api/items').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.rawData = data;
    // });
    this.rawData = [
      {
        name: "Apple",
        connections: [
          {
            ourRep: "Sean",
            theirRep: "Fabio",
            strength: 8
          },
          {
            ourRep: "Ryan",
            theirRep: "Chris",
            strength: 2
          },
          {
            ourRep: "Bob",
            theirRep: "Joe",
            strength: 5
          },
        ]
      },
      {
        name: "Google",
        connections: [
          {
            ourRep: "Kushan",
            theirRep: "Anthony",
            strength: 9
          },
          {
            ourRep: "Brian",
            theirRep: "Jessica",
            strength: 6
          },
          {
            ourRep: "Michelle",
            theirRep: "Jacob",
            strength: 2
          },
        ]
      },
      {
        name: "Intapp",
        connections: [
          {
            ourRep: "Grace",
            theirRep: "Kelly",
            strength: 4
          },
          {
            ourRep: "Josh",
            theirRep: "Ben",
            strength: 7
          }
        ]
      }
    ]

    this.parseClientData(this.rawData);
    console.log(this.clientArray);

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
