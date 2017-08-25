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

  /**
   * True when the page is in client view, false otherwise
   * @type {boolean}
   */
  public isClientView: boolean = false;

  /**
   * Mock data for the intial page loading
   * @type {Connection}
   */
  public sampleConnection = new Connection("Sean", "Kushan", 8);

  /**
   * mock data for the initial page loading
   * @type {Client}
   */
  public testClient = new Client("Apple", [this.sampleConnection]);

  /**
   * stores the list of clients to be displayed by the table
   * @type {Array}
   */
  public clientArray: Array<Client> = [];

  /**
   * the client which was last clicked on
   * @type {Client}
   */
  public activeClient: Client = this.testClient;

  /**
   * the raw data recieved from API
   */
  public rawData: any;



  /**
   * Calls lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit() {
    // Make the HTTP request:
    // this.http.get('http://192.168.255.214:3000').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.rawData = data;
    //
    //   this.parseClientData(this.rawData);
    // });
    this.rawData = [
      {
        name: "UGI Corporation",
        connections: [
          {
            ourRep: "Yvonne Acosta",
            theirRep: "Udy Hernandez",
            strength: 9
          },
          {
            ourRep: "Jae Black",
            theirRep: "Uan Hernandez",
            strength: 9
          },
          {
            ourRep: "Chris Germany",
            theirRep: "Uzanne Calcagno",
            strength: 8
          },
          {
            ourRep: "John Griffith",
            theirRep: "Ustin Rostant",
            strength: 7
          },
          {
            ourRep: "Sarah Novosel",
            theirRep: "Usan Mara",
            strength: 6
          },
          {
            ourRep: "Janine Migden",
            theirRep: "Usan Lindberg",
            strength: 6
          },
          {
            ourRep: "Binh Pham",
            theirRep: "Ufino Doroteo",
            strength: 5
          },
          {
            ourRep: "Chris Germany",
            theirRep: "Uth Concannon",
            strength: 4
          },
          {
            ourRep: "Linda Robertson",
            theirRep: "Usan Mara",
            strength: 3
          },
          {
            ourRep: "Doug Miller",
            theirRep: "Uan Hernandez",
            strength: 3
          },
          {
            ourRep: "Scott Hendrickson",
            theirRep: "Ulvinder Fowler",
            strength: 1
          },
          {
            ourRep: "Mark Taylor",
            theirRep: "Usan Bailey",
            strength: 1
          }

        ]
      },
      {
        name: "Tesoro",
        connections: [
          {
            ourRep: "Danny McCarty",
            theirRep: "Tanley Horton",
            strength: 10
          },
          {
            ourRep: "Richard Sanders",
            theirRep: "Teve Hall",
            strength: 10
          },
          {
            ourRep: "Kay Young",
            theirRep: "Tephanie Segura",
            strength: 7
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Teve Walton",
            strength: 5
          },
          {
            ourRep: "Lisa Csikos",
            theirRep: "Teve Venturatos",
            strength: 5
          },
          {
            ourRep: "Mark Haedicke",
            theirRep: "Teve Hall",
            strength: 4
          },
          {
            ourRep: "Kevin Hyatt",
            theirRep: "Tanley Horton",
            strength: 4
          },
          {
            ourRep: "Leslie Lawner",
            theirRep: "Tephanie Miller",
            strength: 1
          }
        ]
      },
      {
        name: "BracePatt",
        connections: [
          {
            ourRep: "Alan Comnes",
            theirRep: "Ryan Carrol",
            strength: 7
          },
          {
            ourRep: "Mary Hain",
            theirRep: "Nick Pickover",
            strength: 6
          },
          {
            ourRep: "Alan Comnes",
            theirRep: "Dwight Kiss",
            strength: 4
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Ryan Carrol",
            strength: 4
          },
          {
            ourRep: "Ray Alvarez",
            theirRep: "Ryan Carrol",
            strength: 4
          },
          {
            ourRep: "Alan Comnes",
            theirRep: "Kevin Curry",
            strength: 3
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Nick Pickover",
            strength: 1
          }
        ]
      },
      {
        name:"TXU",
        connections:[
          {
            ourRep: "Chris Germany",
            theirRep: "Jeff Smith",
            strength: 6
          },
          {
            ourRep: "Kevin Brady",
            theirRep: "Jeff Smith",
            strength: 6
          },
          {
            ourRep: "Mike Carson",
            theirRep: "C Jackson",
            strength: 6
          },
          {
            ourRep: "Ami Chokshi",
            theirRep: "M Jones",
            strength: 2
          },
          {
            ourRep: "J Farmers",
            theirRep: "dboerner",
            strength: 2
          },
          {
            ourRep: "Mike Carson",
            theirRep: "Chris Jackson",
            strength: 0
          },

        ]
      },
      {
        name: "Govadv",
        connections: [
          {
            ourRep: "Harry Kingerski",
            theirRep: "Sean Govenar",
            strength: 2
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Sean Govenar",
            strength: 2
          },
          {
            ourRep: "Harry Kingerski",
            theirRep: "Henry Govenar",
            strength: 1
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Mary Cortez",
            strength: 1
          }
        ]
      },
      {
        name:"Marathon Petroleum Corporation",
        connections: [

          {
            ourRep: "Samuel Schott",
            theirRep: "Mber Ebow",
            strength: 10
          },
          {
            ourRep: "Vasant Shanbhogue",
            theirRep: "Mitava Dhar",
            strength: 3
          },
          {
            ourRep: "Michelle Cash",
            theirRep: "Manda Curless",
            strength: 2
          },
          {
            ourRep: "Donna Scott",
            theirRep: "My Mulligan",
            strength: 0
          }
        ]
      },
      {
        name: "Intel",
        connections:[
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Anil Sama",
            strength: 10
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Pat Scatena",
            strength: 9
          }

        ]
      },
      {
        name: "Sun",
        connections:[
          {
            ourRep: "Karen Denne",
            theirRep: "Piper Cole",
            strength: 4
          },
          {
            ourRep: "Jeff Dasovich",
            theirRep: "Piper Cole",
            strength: 3
          }
        ]
      },
      {
        name: "Weil",
        connections:[
          {
            ourRep: "Michelle Cash",
            theirRep: "Andrew Clark",
            strength: 9
          }
        ]
      }
    ];

    this.parseClientData(this.rawData);

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
    this.isClientView = true;
    let that = this;
    setTimeout(function() { that.clientView.refreshClientPage(); }, 200);
  }

  public backButtonClicked(){
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
