import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numword',
  pure: true,
})
export class ApplePipe implements PipeTransform {
  getNumWord(num, words): string {
    const dd = num % 100;
    if ((dd >= 11) && (dd <= 19)) {
      return words[2];
    }
    const d = num % 10;
    if (d === 1) {
      return words[0];
    }
    if ((d >= 2) && (d <= 4)) {
      return words[1];
    }
    return words[2];
  }

  transform(cnt: string, ...words: string[]): string {
    if (cnt === '' || isNaN(Number(cnt))) {
      return;
    }
    return (`${cnt} ${this.getNumWord(cnt, words)}`);
  }
}
