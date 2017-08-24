import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ConnectionsComponent } from './connections.component';
import { ConnectionsRoutingModule } from './connections-routing.module';
import { ClientComponent } from '../client/client.component';

@NgModule({
  imports: [
    ConnectionsRoutingModule,
    ChartsModule
  ],
  declarations: [
    ConnectionsComponent,
    ClientComponent
  ]
})
export class ConnectionsModule {
}
