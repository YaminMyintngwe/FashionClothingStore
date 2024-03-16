import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatter implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  
  transform(timestamp: any, format : string): string | null {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    console.log(this.datePipe.transform(date, format))
    return this.datePipe.transform(date, format);
  }

}
