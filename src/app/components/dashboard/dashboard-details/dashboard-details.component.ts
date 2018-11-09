import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent implements OnInit {

  public data;
  constructor() {
    /**
     * Data to simulate backend sintese data
     */
    this.data = [
      {
        name: ' ',
       data: [1, 2, 3, -3, 5, 2, 10, 3, 7.5]
     },
     {
        name: ' ',
       data: [-1, 2, 0.5, 6, -3, -2, 4, 1, 9.5]
     }
    ]
   }

  ngOnInit() {
   
  }
  

}
