import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'transformation'
})
export class TransformationPipe implements PipeTransform {
  today: string = moment().format('D MMMM YYYY');
  yesterday: string = moment().subtract(1, 'day').format('D MMMM YYYY');
  day: string = '';

  transform(value: any): any {
    const sortedData = {};

    for (const item of value) {
      switch(moment.unix(item.time).format('D MMMM YYYY')) { 
        case this.today: { 
          this.day = 'Today';
          break; 
        } 
        case this.yesterday: { 
          this.day = 'Yesterday';
          break; 
        } 
        default: { 
          this.day = moment.unix(item.time).format('D MMMM YYYY');
          break; 
        } 
      } 

      item.time = moment.unix(item.time).format('LT');

      switch(!sortedData[this.day]) { 
        case true: { 
          sortedData[this.day] = [item];
          break; 
        } 
        default: { 
          sortedData[this.day] = [...sortedData[this.day], item];
          break; 
        } 
      } 
    }

    return Object.entries(sortedData);
  }

}
