import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ConnectionsComponent } from './connections.component';
import { ConnectionsRoutingModule } from './connections-routing.module';
import { ClientComponent } from '../client/client.component';

import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    ConnectionsRoutingModule,
    ChartsModule,
    NvD3Module
  ],
  declarations: [
    ConnectionsComponent,
    ClientComponent
  ]
})
export class ConnectionsModule {
}
