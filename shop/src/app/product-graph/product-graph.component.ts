import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-graph',
  templateUrl: './product-graph.component.html',
  styleUrls: ['./product-graph.component.css']
})
export class ProductGraphComponent implements OnInit {
  public lineChartType = 'line';
  public barChartType = 'bar';
  public lineChartData = {};
  public barChartData = {};
  constructor() { 
    this.lineChartData = {
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' ,  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'},
          {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'}
        ]
    };
    this.barChartData = {
      labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets:[
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' ,  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',  backgroundColor: 'rgba(77,83,96,0.2)',borderColor: 'rgba(77,83,96,1)'}
      ]
  };
    
  }

  public lineChartOptions:any = {
    responsive: true
  };

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
