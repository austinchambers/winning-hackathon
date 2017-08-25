import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client'

//declare let d3: any;


@Component({
  selector: 'opportunity-client-component',
  templateUrl: 'opportunity-client.component.html',
  styleUrls: ['opportunity-client.component.css',
    '../../../node_modules/nvd3/build/nv.d3.css']

})


export class OpportunityClientComponent implements OnInit {
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
    // const color = d3.scale.category20();
    // this.options = {
    //   chart: {
    //     type: 'forceDirectedGraph',
    //     height: 500,
    //     width: (function () {
    //       return nv.utils.windowSize().width
    //     })(),
    //     margin: {top: 20, right: 20, bottom: 20, left: 20},
    //     color: function (d) {
    //       return color(d.group)
    //     },
    //     nodeExtras: function (node) {
    //       node && node
    //         .append("text")
    //         .attr("dx", 8)
    //         .attr("dy", ".35em")
    //         .text(function (d) {
    //           return d.name
    //         })
    //         .style('font-size', '10px');
    //     }
    //   }
    // }
    //
    // this.data =
    //   {
    //     "nodes":[
    //       {"name":"Myriel","group":1},
    //       {"name":"Napoleon","group":1},
    //       {"name":"Mlle.Baptistine","group":1},
    //       {"name":"Mme.Magloire","group":5},
    //       {"name":"CountessdeLo","group":5},
    //       {"name":"Geborand","group":1},
    //       {"name":"Champtercier","group":1},
    //       {"name":"Cravatte","group":16},
    //       {"name":"Count","group":1},
    //       {"name":"OldMan","group":1}
    //
    //     ],
    //     "links":[
    //       {"source":1,"target":0,"value":1},
    //       {"source":2,"target":0,"value":8},
    //       {"source":3,"target":0,"value":10},
    //       {"source":3,"target":2,"value":6},
    //       {"source":4,"target":0,"value":1},
    //       {"source":5,"target":0,"value":1},
    //       {"source":6,"target":0,"value":1},
    //       {"source":7,"target":0,"value":1},
    //       {"source":8,"target":0,"value":2},
    //       {"source":9,"target":0,"value":1}
    //
    //     ]
    //   }

  }
}
