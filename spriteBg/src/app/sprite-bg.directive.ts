import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appSpriteBg]'
})
export class SpriteBgDirective {
  @Input() spriteWidth = '25px';
  @Input() spriteHeight = '25px';
  @Input() spriteOffsetX = '0';
  @Input() spriteOffsetY = '0';
  @Input() spriteUrl = 'http://fe.it-academy.by/Examples/smileys.png';

  constructor(){}

  @HostBinding('style.width') get getSpriteWidth(): string {
    return this.spriteWidth;
  }

  @HostBinding('style.height') get getSpriteHeight(): string {
    return this.spriteHeight;
  }

  @HostBinding('style.backgroundPositionX') get getSpriteOffsetX(): string {
    return `-${parseFloat(this.spriteWidth) * Number(this.spriteOffsetX)}px`;
  }

  @HostBinding('style.backgroundPositionY') get getSpriteOffsetY(): string {
    return `-${parseFloat(this.spriteHeight) * Number(this.spriteOffsetY)}px`;
  }

  @HostBinding('style.backgroundImage') get getSpriteUrl(): string {
    return `url(${this.spriteUrl})`;
  }
}
