import { Component, OnInit } from '@angular/core';
import { StacklineService } from './services/stackline.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  public stackLineData: any;
  public salesData: any;
  public retailSales: number[];
  public wholesaleSales: number[];
  public chart: any = [];
  public skilljar;
  public showChart: boolean = true;

  constructor(private stackLineService: StacklineService) {
  }

  public ngOnInit() {
    this.loadSales();
    }
  public loadSales() {
    this.showChart = true;
    this.stackLineService.getStackLineData().subscribe((stackLineResponse) => {
      this.stackLineData = stackLineResponse ? stackLineResponse : null;
      for (const data of this.stackLineData) {
        this.salesData = data && data.sales ? data.sales : null;
        // if (this.showChart) {
        // Chart code
        // tslint:disable-next-line: no-string-literal
        this.retailSales = data['sales'].map((sales: any) => sales.retailSales);
        // tslint:disable-next-line: no-string-literal
        this.wholesaleSales = data['sales'].map(
          (sales: any) => sales.wholesaleSales
        );

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.months,
            datasets: [
              {
                label: 'Retail Selas',
                data: this.retailSales,
                borderColor: '#03a5fc',
                fill: false,
              },
              {
                label: 'Wholesale Selas',
                data: this.wholesaleSales,
                borderColor: '#becacf',
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            legend: {
              display: true,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                },
              ],
              yAxes: [
                {
                  display: false,
                },
              ],
            },
          },
        });
        // }
      }
    });
  }

  public load() {
    this.showChart = false;
    this.stackLineService.getSkillJarData().subscribe((res) => {
      this.skilljar = res.items;
    });
  }
}
