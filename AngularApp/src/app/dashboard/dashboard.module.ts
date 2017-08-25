import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import { OpportunityClientComponent } from '../opportunity-client/opportunity-client.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    DragulaModule
  ],
  declarations: [
    DashboardComponent,
    OpportunityClientComponent
  ]
})
export class DashboardModule { }
