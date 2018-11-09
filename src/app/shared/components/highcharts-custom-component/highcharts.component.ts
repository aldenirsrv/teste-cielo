import { Component, OnInit, Input  } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-highcharts-custom-component',
  template: '<div [chart]="chart"></div>',
  styleUrls: ['./highcharts-custom.component.scss']
})
export class HighchartsCustomComponent implements OnInit {
  /**
   * Inputs to data and chart type
   */
  @Input()data: Array<any>;
  @Input()type: string;

  public chart;
  /**
   * Colors 
   */
  public colors = ['#FD5F00', '#4c84ff', '#ff5560', '#d50000', '#c51162', '#aa00ff', '#6200ea', '#0091ea', '#00bfa5', '#00c853', '#ffab00'];
 
  constructor() {}

  ngOnInit() {
    /** 
     * Instance of hightchart
     */
    this.chart = new Chart({
      chart: {
        type: this.type ? this.type : 'column'
      },
      title: {
        text: ' '
      },
      colors: this.colors,
      credits: {
        enabled: false
      },
      series: this.data ? this.data : []
    });
  }

}
