import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-graph',
  templateUrl: './sell-graph.component.html',
  styleUrls: ['./sell-graph.component.css']
})
export class SellGraphComponent implements OnInit {
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor: 'rgba(148,159,177,0.2)', borderColor: 'rgba(148,159,177,1)'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor: 'rgba(148,159,177,0.2)', borderColor: 'rgba(148,159,177,1)'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',backgroundColor: 'rgba(148,159,177,0.2)', borderColor: 'rgba(148,159,177,1)'}
    ]
  };
  constructor() { }
  public lineChartOptions:any = {
    responsive: true
  };
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  ngOnInit() {
  }

}
