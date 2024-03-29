import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
