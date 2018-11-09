import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
/**
 * Project imports
 */
import { ErrorsHandler } from '../singleton/errors-handler';
import { HighchartsCustomComponent } from './components/highcharts-custom-component/highcharts.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],

  declarations: [HighchartsCustomComponent],
  exports: [
    ChartModule,
    HighchartsCustomComponent
  ],
  providers: [ErrorsHandler]
})
export class SharedModule { }
