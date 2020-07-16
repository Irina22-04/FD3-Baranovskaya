import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Options} from '../models/options.model';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {
  @Input() spriteOptions: Options;

  @Output() handleSubmit = new EventEmitter<boolean>();

  onClick(): void {
    this.handleSubmit.emit(true);
  }

  spriteStyle(): object {
    return {
      width: this.spriteOptions.spriteWidth + 'px',
      height: this.spriteOptions.spriteHeight + 'px',
      top: this.spriteOptions.spriteOffsetY + 'px',
      left: this.spriteOptions.spriteOffsetY + 'px',
      backgroundImage: `url(${this.spriteOptions.spriteUrl})`
    };
  }
}

