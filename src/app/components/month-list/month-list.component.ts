import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-month-list',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './month-list.component.html'
})
export class MonthListComponent {
  readonly months: string[] = [
    'Enero 24', 
    'Febrero 24',
    'Marzo 24',
    'Enero 23',
    'Febrero 23',
    'Marzo 23',
    'Abril 23',
    'Mayo 23',
    'Junio 23',
    'Julio 23',
    'Agosto 23',
    'Septiembre 23',
    'Octubre 23',
    'Noviembre 23',
    'Diciembre 23',
  ];
}
