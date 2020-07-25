import { Component, OnInit } from '@angular/core';

import {CinemaDatasource} from '../cinema.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  private dataSeats: CinemaDatasource;

  constructor(dataSeats: CinemaDatasource){
    this.dataSeats = dataSeats;
  }

  ngOnInit(): void {
    this.dataSeats.createHallSeats();
  }

  getAllSeats(): number {
    return this.dataSeats.getAllSeats();
  }

  getOccupiedSeats(): number {
    return this.dataSeats.getOccupiedSeats();
  }

  getFreeSeats(): number {
    return this.dataSeats.getFreeSeats();
  }
}
