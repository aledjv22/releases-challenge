import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-month-list',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './month-list.component.html'
})
export class MonthListComponent {
  readonly months: { title: string, param: string }[] = [
    { title: 'Enero 24', param: '01Jan24' },
    { title: 'Febrero 24', param: '01Feb24' },
    { title: 'Marzo 24', param: '01Mar24' },
    { title: 'Enero 23', param: '01Jan23' },
    { title: 'Febrero 23', param: '01Feb23' },
    { title: 'Marzo 23', param: '01Mar23' },
    { title: 'Abril 23', param: '01Apr23' },
    { title: 'Mayo 23', param: '01May23' },
    { title: 'Junio 23', param: '01Jun23' },
    { title: 'Julio 23', param: '01Jul23' },
    { title: 'Agosto 23', param: '01Aug23' },
    { title: 'Septiembre 23', param: '01Sep23' },
    { title: 'Octubre 23', param: '01Oct23' },
    { title: 'Noviembre 23', param: '01Nov23' },
    { title: 'Diciembre 23', param: '01Dec23' },
  ];
}
