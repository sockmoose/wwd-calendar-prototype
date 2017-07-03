import { Component } from '@angular/core';

import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';

import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {

  constructor(private mockDataService: MockDataService) {}


}
