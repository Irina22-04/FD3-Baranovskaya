import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {CinemaDatasource} from '../cinema.service';

@Component({
  selector: 'app-cash2',
  templateUrl: './cash2.component.html',
  styleUrls: ['./cash2.component.css']
})
export class Cash2Component implements OnInit {

  cash2Form: FormGroup;
  private dataSeats: CinemaDatasource;

  constructor(private fb: FormBuilder, dataSeats: CinemaDatasource){
    this.dataSeats = dataSeats;
  }

  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void {
    this.cash2Form = this.fb.group({
      ticketNumber: ['', [
        Validators.pattern(/^\d\d?/),
        Validators.min(1),
        Validators.max(25),
        Validators.required
      ]],
    });
  }

  submit(): void {
    this.dataSeats.chooseSeatsForBuy(Number(this.cash2Form.value.ticketNumber), 2);
    this.cash2Form.reset();
  }
  returnBuyInfo(): string {
      return this.dataSeats.buyInfo2;
  }
}
