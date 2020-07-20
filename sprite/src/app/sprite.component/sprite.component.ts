import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Options} from '../models/options.model';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {
  @Input() spriteOptions: Options;

  @Output() clicked = new EventEmitter<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  }

  spriteStyle(): object {
    return {
      width: this.spriteOptions.spriteWidth + 'px',
      height: this.spriteOptions.spriteHeight + 'px',
      backgroundPositionY: -this.spriteOptions.spriteOffsetY + 'px',
      backgroundPositionX: -this.spriteOptions.spriteOffsetX + 'px',
      backgroundImage: `url(${this.spriteOptions.spriteUrl})`
    };
  }
}

