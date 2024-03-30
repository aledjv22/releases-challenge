import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './not-found.component.html'
})
export default class NotFoundComponent {
  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-80 mb-4 py-3 text-white font-semibold`;
}
