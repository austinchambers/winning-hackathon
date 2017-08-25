import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client'

declare let d3: any;


@Component({
  selector: 'client-component',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css',
    '../../../node_modules/nvd3/build/nv.d3.css']

})


export class ClientComponent implements OnInit {
  encapsulation: ViewEncapsulation.None;


  // graphic variable
  options;
  data;

  @Input()
  public client: Client;

  public isClientView: boolean = false;

  public tableView: boolean = true;
  public graphicView: boolean = false;

  public enableTableView()
  {
    this.tableView = true;
    this.graphicView = false;
  }

  public enablegraphicView(){
    this.tableView = false;
    this.graphicView = true;
  }

  // graphic functions
  ngOnInit() {
    const color = d3.scale.category20();
    this.options = {
      chart: {
        type: 'forceDirectedGraph',
        height: 300,
        width: (function () {
          return nv.utils.windowSize().width/(1.5);
        })(),
        showLabels: false,
        margin: {top: 20, right: 20, bottom: 20, left: 20},
        color: function (d) {
          return color(d.group)
        },
        nodeExtras: function (node) {
          node && node
            .append("text")
            .attr("dx", 8)
            .attr("dy", ".35em")
            .text(function (d) {
              return d.name
            })
            .style('font-size', '10px');
        }
      }
    }
    this.refreshClientPage();

  }

  public refreshClientPage(){
    this.data = {"nodes":[], "links":[]};
    let nodeObj = {"name": this.client.name, "group":1};
    let linksObj = {"source": null, "target":0, "value":1};
    this.data.nodes.push(nodeObj);
    for(let i = 0; i < this.client.connections.length; i++){
      nodeObj = {"name": this.client.connections[i].ourRepresentative, "group":this.client.connections[i].strength}
      this.data.nodes.push(nodeObj);
      linksObj = {"source": i+1, "target":0, "value": (this.client.connections[i].strength*2)};
      this.data.links.push(linksObj);
    }
  }
}
