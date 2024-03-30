import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sign-up.component.html'
})
export default class SignUpComponent implements OnInit{
  readonly stylesInput = 'bg-transparent border-2 border-[#FD7658] outline-[#FFA07A] rounded-lg w-full px-2 py-1 mb-2';

  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-full mt-3 py-3`;

  formReg: FormGroup;

  isRegistered = signal(false);

  constructor(
    public userService: UserService,
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        this.isRegistered.set(true);
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}
