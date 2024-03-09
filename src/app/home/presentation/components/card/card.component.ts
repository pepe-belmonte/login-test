import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() image: string= '';
  @Output () clickImage = new EventEmitter<string>;

  onClickImage(): void {
    this.clickImage.emit(this.image);
  }
}
