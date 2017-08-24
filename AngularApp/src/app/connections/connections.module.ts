import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ConnectionsComponent } from './connections.component';
import { ConnectionsRoutingModule } from './connections-routing.module';

@NgModule({
  imports: [
    ConnectionsRoutingModule,
    ChartsModule
  ],
  declarations: [ ConnectionsComponent ]
})
export class ConnectionsModule {
}
