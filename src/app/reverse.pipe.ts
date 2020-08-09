import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let splitString = value.split('');
    let reversedArray = splitString.reverse();
    return reversedArray.join('');
  }

}
