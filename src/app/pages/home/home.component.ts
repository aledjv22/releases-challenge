import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { MonthListComponent } from '@components/month-list/month-list.component';
import { TagListComponent } from '@components/tag-list/tag-list.component';
import { CardComponent } from '@components/card/card.component';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref, MonthListComponent, TagListComponent, CardComponent],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
  constructor(public userService: UserService) {}
  
  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A]
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A]
  rounded-lg w-full mb-4 py-3`;
}