import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './sign-up.component.html'
})
export default class SignUpComponent {
  readonly stylesInput = 'bg-transparent border-2 border-[#FD7658] outline-[#FFA07A] rounded-lg w-full px-2 py-1 mb-2';

  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-full mt-3 py-3`;
}
