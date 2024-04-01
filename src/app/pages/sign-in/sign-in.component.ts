import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export default class SignInComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    public userService: UserService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.userService.isLogged.set(true);
        this.userService.user.set({ email: response.user.email ?? '', password: ''});
      })
      .catch(error => console.log(error));
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        this.userService.isLogged.set(true);
        this.userService.user.set({ email: response.user.email ?? '', password: ''});
      })
      .catch(error => console.log(error))
  }
}