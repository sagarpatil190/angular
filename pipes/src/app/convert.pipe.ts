import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let heightArray:string[] = value.split('.');

    let feet = !isNaN(parseInt(heightArray[0])) ? parseInt(heightArray[0]):0;
    let inch = (!isNaN(parseInt(heightArray[1])) && parseInt(heightArray[1]) < 13 ) ? parseInt(heightArray[1].substring(0,2)):0;
    let height:number = feet * 30.48 + inch * 2.54
    return height;
  }

}
