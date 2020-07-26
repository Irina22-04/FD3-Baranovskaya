import { Component, OnInit } from '@angular/core';

import {TicketsService} from '../tickets.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  private dataSeats: TicketsService;
  seatsArray: boolean[];

  constructor(dataSeats: TicketsService){
    this.dataSeats = dataSeats;
  }

  ngOnInit(): void {
    this.dataSeats.createHallSeats();
    this.dataSeats.getAllArraySeats().subscribe(data => this.seatsArray = data);
  }

  getAllSeats(): number {
    return this.dataSeats.getAllSeats();
  }

  getSeatClass(index): boolean {
    return this.seatsArray[index] === false;
  }

  getOccupiedSeats(): number {
    return this.getSeatsNumb(false);
  }
  getFreeSeats(): number {
    return this.getSeatsNumb(true);
  }
  getSeatsNumb(value): number {
    return this.seatsArray
      .filter(item => item === value)
      .length;
  }
}
