import { Component, OnInit, Input } from '@angular/core';
import { StacklineService } from '../../services/stackline.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @Input() salesData: any;
  public stackLineData: any;
  constructor(private stackLineService: StacklineService) { }

  ngOnInit() {
   this.stackLineService.getStackLineData().subscribe((stackData) => {
    this.stackLineData = stackData ? stackData : null;
    for (const data of this.stackLineData) {
      this.salesData = data && data.sales ? data.sales : null;
    }
   });
  }
}
