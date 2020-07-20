import {Component} from '@angular/core';
import {Options} from '../models/options.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  options: Options = {
    spriteUrl: 'http://fe.it-academy.by/Examples/cards2.png',
    spriteOffsetX: '0',
    spriteOffsetY: '0',
    spriteWidth: '140',
    spriteHeight: '190'
  };

  setRandomNumber(min, max): number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  changeCard(): void{
    this.options.spriteOffsetX = `${this.setRandomNumber(0, 3) * 145}`;
    this.options.spriteOffsetY = `${this.setRandomNumber(0, 12) * 194}`;
  }
}
