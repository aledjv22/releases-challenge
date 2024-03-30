import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  constructor(
    public userService: UserService
    ){}  
  
  ngOnInit(): void {}

  onClick() {
    this.userService.logout()
      .then(() => {
        this.userService.isLogged.set(false);
      })
      .catch(error => console.log(error));
  }
}
