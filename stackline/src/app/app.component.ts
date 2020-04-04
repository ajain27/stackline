import { Component, OnInit } from '@angular/core';
import { StacklineService } from './stackline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stackLineData: any;
  public salesData: any;
  public weelSales: number;
  public retailSales: number;
  public wholesaleSales: number;
  public unitsSold: number;
  constructor(
    private stackLineService: StacklineService
  ) { }

  public ngOnInit() {
    this.stackLineService.getStackLineData().subscribe((res) => {
      this.stackLineData = res;
      for (const data of this.stackLineData) {
        this.salesData = data.sales;
      }
    });
  }
}
