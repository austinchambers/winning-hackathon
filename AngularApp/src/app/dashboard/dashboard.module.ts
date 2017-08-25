import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import { OpportunityClientComponent } from '../opportunity-client/opportunity-client.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    OpportunityClientComponent
  ]
})
export class DashboardModule { }
