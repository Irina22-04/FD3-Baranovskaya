import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {WrapperComponent} from './wrapper.component/wrapper.component';
import {SpriteComponent} from './sprite.component/sprite.component';

@NgModule({
  declarations: [
    WrapperComponent, SpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
