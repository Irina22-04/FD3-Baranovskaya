import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HallComponent } from './hall/hall.component';
import {CinemaDatasource} from './cinema.service';
import {Cash1Component} from './cash1/cash1.component';
import {Cash2Component} from './cash2/cash2.component';

@NgModule({
  declarations: [
    HallComponent,
    Cash1Component,
    Cash2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CinemaDatasource],
  bootstrap: [HallComponent]
})
export class AppModule { }
