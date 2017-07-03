import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: 'calendar-cell.component.html'
})
export class CalendarCellComponent implements OnInit {
  @Input() date: string;
  @Input() garbage: string;
  @Input() recycling: string;
  @Input() yardWaste: string;
  dateObject: Date;
  daysBeforeFirst: number[];
  daysAfterLast: number[];

  ngOnInit(): void {
    const dateArray = this.date.split('/');
    this.dateObject = new Date(parseInt(dateArray[2]), parseInt(dateArray[1]) + 1, parseInt(dateArray[0]));

    switch (this.dateObject.getDate()) {
      case 1:
        for (let i = 0; i < this.dateObject.getDay(); i++) {
          this.daysBeforeFirst.push(i);
        }
        break;
      case 28:
      case 29:
      case 30:
      case 31:
        const tempDate = new Date(this.dateObject.getMilliseconds());
        tempDate.setDate(this.dateObject.getDate() + 1);
        if (tempDate.getMonth() !== this.dateObject.getMonth()) {
          for (let i = 0; i < this.dateObject.getDay(); i++) {
            this.daysAfterLast.push(i);
          }
        }
        break;
      default:
        break;
    }
  }
}
