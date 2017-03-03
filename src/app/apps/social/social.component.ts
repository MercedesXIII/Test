import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  images: any[] = [];
  num: number = 1;

  constructor() {
    for (this.num; this.num <= 9; this.num += 1) this.images.push(this.num);
  }

  public pieChartColors: any[] = [{ backgroundColor: ["#f44336", "#3f51b5", "#ffeb3b", "#4caf50", "#2196f"] }];
  public pieOptions:any = {
    responsive: true,
    legend: {
      position: 'right'
    }
  };
  public pieChartLabels:string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

}
