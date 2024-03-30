import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sign-in.component.html'
})
export default class SignInComponent implements OnInit {
  readonly stylesInput = 'bg-transparent border-2 border-[#FD7658] outline-[#FFA07A] rounded-lg w-full px-2 py-1 mb-2';

  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-full mb-4 py-3`;

  readonly stylesButtonGoogle = `hover:bg-gradient-to-r flex items-center justify-center w-80 
  border-2 text-[#FD7658] border-[#FD7658] py-3 rounded-lg hover:text-white 
  hover:to-[#FD7658] hover:from-[#FFA07A] hover:border-[#FFFFFF]`;

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