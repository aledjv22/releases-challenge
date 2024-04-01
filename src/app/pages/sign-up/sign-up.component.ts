import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent implements OnInit{

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
