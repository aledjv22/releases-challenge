import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { Release } from '@models/release.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLinkWithHref, DatePipe],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input({required: true}) release!: Release;
}
