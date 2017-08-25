import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OpportunityClientComponent } from '../opportunity-client/opportunity-client.component';
import {HttpClient} from '@angular/common/http';
import {Client} from '../client';
import {Connection} from '../connection';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild('clientView') clientView: OpportunityClientComponent;

  constructor(private http: HttpClient, private dragulaService: DragulaService) {
  }


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
    console.log(this.dragulaService.find("second-bag"));
    if (!this.dragulaService.find("second-bag")) {
      this.dragulaService.setOptions("second-bag", {
        moves: function (el, container, handle) {
          return handle.className === 'card-header drag';
        }
      });
      this.dragulaService.drag.subscribe((value) => {
        this.onDrag(value.slice(1));
      });
      this.dragulaService.drop.subscribe((value) => {
        this.onDrop(value.slice(1));
      });
      this.dragulaService.over.subscribe((value) => {
        this.onOver(value.slice(1));
      });
      this.dragulaService.out.subscribe((value) => {
        this.onOut(value.slice(1));
      });
    }

    // Make the HTTP request:
    this.http.get('http://192.168.255.214:3000').subscribe(data => {
      // Read the result field from the JSON response.
      this.rawData = data;
      this.parseClientData(this.rawData);
    });

  }

  private parseClientData(rawData){
    rawData.forEach((client: clientItem, index: number) => {
      let connectionArray: Array<Connection> = [];
      client.connections.forEach((connection: connectionItem, index: number) => {
        connectionArray.push(new Connection(connection.ourRep, connection.theirRep, Math.round(connection.strength)))
      });
      this.clientArray.push(new Client(client.name, connectionArray));
    });
  }

  private clientCardClicked(event){
    let activeClientName = event.path[1].children[0].innerText;
    //console.log(activeClientName);
    this.activeClient = this.clientArray.find(client => client.name == activeClientName);
    this.isClientView = true;
  }

  public backButtonClicked(){
    this.isClientView = false;
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
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
