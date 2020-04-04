import { Component, OnInit } from '@angular/core';
import { StacklineService } from './stackline.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chart = [];
  public months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];
  public stackLineData: any;
  public salesData: any;
  public weekEnding: number;
  public retailSales: number;
  public wholesaleSales: number;
  public unitsSold: number;
  constructor(
    private stackLineService: StacklineService
  ) { }

  public ngOnInit() {
    this.stackLineService.getStackLineData().subscribe((res) => {
      this.stackLineData = res ? res : null;
      for (const data of this.stackLineData) {
        console.log(data);
        this.salesData = data && data.sales ? data.sales : null;

        // Chart code

        // tslint:disable-next-line: no-string-literal
        this.retailSales = data['sales'].map((sales: any) => sales.retailSales);
        // tslint:disable-next-line: no-string-literal
        this.wholesaleSales = data['sales'].map((sales: any) => sales.wholesaleSales);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.months,
            datasets: [
              {
                data : this.retailSales,
                borderColor: '#03a5fc',
                fil: false
              },
              {
                data : this.wholesaleSales,
                borderColor: '#becacf',
                fil: false
              }
            ]
          },
          options:  {
            legen: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      }
    });
  }
}
