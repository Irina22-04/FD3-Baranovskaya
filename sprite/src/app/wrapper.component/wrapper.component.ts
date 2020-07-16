import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Options} from '../models/options.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  spriteForm: FormGroup;

  options: Options = {
    spriteUrl: 'http://fe.it-academy.by/Examples/cards2.png',
    spriteOffsetX: '0',
    spriteOffsetY: '0',
    spriteWidth: '100',
    spriteHeight: '100'
  };

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void {
    this.spriteForm = this.fb.group({
      spriteUrl: [this.options.spriteUrl, [
        Validators.required
      ]],
      spriteOffsetX: [this.options.spriteOffsetX, [
        Validators.required
      ]],
      spriteOffsetY: [this.options.spriteOffsetY, [
        Validators.required
      ]],
      spriteWidth: [this.options.spriteWidth, [
        Validators.required
      ]],
      spriteHeight: [this.options.spriteHeight, [
        Validators.required
      ]],
    });
  }

  onSubmit(): void{
    this.options = this.spriteForm.value;
  }
}
