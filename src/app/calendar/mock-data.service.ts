import { Injectable } from '@angular/core';

const DATA = {
  data: [
    {date: '3/7/2017', garbage: 'show', recycling: 'show', yardWaste: 'show'},
    {date: '17/7/2017', garbage: 'show', recycling: 'show'},
    {date: '31/7/2017', garbage: 'show', recycling: 'show', yardWaste: 'show'},
  ]
};

@Injectable()
export class MockDataService {
  getPickupData(month: number, year: number): Promise<any> {
    if (month === 7 && year === 2017) {
      return Promise.resolve(DATA);
    } else {
      return Promise.reject('No data for given month');
    }
  }
}
