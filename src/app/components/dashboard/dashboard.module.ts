import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';

/**
 * Shared modules
 */
import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from './dashboard.service';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardDetailsComponent], 
  providers: [DashboardService]
})
export class DashboardModule { }
