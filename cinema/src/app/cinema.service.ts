import {Injectable} from '@angular/core';

@Injectable()
export class CinemaDatasource {

  private hallSeats: boolean[];
  private seatsNumb = 25;
  buyInfo1: string;
  buyInfo2: string;

  constructor() {
  }

  createHallSeats(): void {
    this.hallSeats = new Array(this.seatsNumb).fill(true);
  }

  getAllSeats(): number {
    return this.seatsNumb;
  }

  getOccupiedSeats(): number {
    return this.getSeatsNumb(false);
  }
  getFreeSeats(): number {
    return this.getSeatsNumb(true);
  }
  getSeatsNumb(value): number {
    return this.hallSeats
      .filter(item => item === value)
      .length;
  }

  chooseSeatsForBuy(value, cash): void {
    const canBuyArray = this.hallSeats
      .map((item, index) => {
        return this.checkSeatsForBuy(index, value) ? index : item;
      }).filter(item => typeof item === 'number');
    return (canBuyArray.length === 0) ? this.showNoSeats(value, cash) : this.buySeats(canBuyArray, value, cash);
  }
  showNoSeats(value, cash): void {
    const buyInfo = `Заданного количетсва мест (${value}) нет`;
    this.setInfoValue(cash, buyInfo);
  }
  buySeats(seatsArray, numberSeats, cash): void {
    let buyInfo: string;
    const randomSeats = seatsArray[this.randomInteger(0, seatsArray.length - 1)];
    this.hallSeats.fill(false, randomSeats, randomSeats + numberSeats);
    switch (numberSeats){
      case 1:
        buyInfo = `Вы купили место ${randomSeats + 1}`;
        break;
      case 2:
        buyInfo = `Вы купили места ${randomSeats + 1} и ${randomSeats + 2}`;
        break;
      default:
        buyInfo = `Вы купили местa c ${randomSeats + 1} по ${randomSeats + numberSeats}`;
    }
    this.setInfoValue(cash, buyInfo);
  }
  setInfoValue(cash, info): void {
    return (cash === 1) ? this.buyInfo1 = info : this.buyInfo2 = info;
  }

  checkSeatsForBuy(index, value): boolean {
    const checkedArray = this.hallSeats.slice(index, index + value);
    return checkedArray.length === value && checkedArray.every(item => item === true);
  }

  randomInteger(min, max): number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
}
