import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';

import { MockDataService } from './mock-data.service';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarCellComponent
  ],
  exports: [
    CalendarComponent
  ],
  providers: [MockDataService]
})
export class CalendarModule {}
