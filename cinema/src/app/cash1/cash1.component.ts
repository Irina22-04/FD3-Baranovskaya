import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {CinemaDatasource} from '../cinema.service';

@Component({
  selector: 'app-cash1',
  templateUrl: './cash1.component.html',
  styleUrls: ['./cash1.component.css']
})
export class Cash1Component implements OnInit {

  cash1Form: FormGroup;
  private dataSeats: CinemaDatasource;

  constructor(private fb: FormBuilder, dataSeats: CinemaDatasource){
    this.dataSeats = dataSeats;
  }

  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void {
    this.cash1Form = this.fb.group({
      ticketNumber: ['', [
        Validators.pattern(/^\d\d?/),
        Validators.min(1),
        Validators.max(25),
        Validators.required
      ]],
    });
  }

  submit(): void {
    this.dataSeats.chooseSeatsForBuy(Number(this.cash1Form.value.ticketNumber), 1);
    this.cash1Form.reset();
  }
  returnBuyInfo(): string {
      return this.dataSeats.buyInfo1;
  }
}
