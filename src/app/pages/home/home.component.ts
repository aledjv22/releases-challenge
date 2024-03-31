import { Component, Input, inject, SimpleChanges, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { MonthListComponent } from '@components/month-list/month-list.component';
import { TagListComponent } from '@components/tag-list/tag-list.component';
import { CardComponent } from '@components/card/card.component';
import { CardLoadingComponent } from '@components/card-loading/card-loading.component';
import { UserService } from '@services/user.service';
import { Release } from '@models/release.model';
import { ReleasesService } from '@services/releases.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref, MonthListComponent, TagListComponent, 
    CardComponent, CardLoadingComponent],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
  constructor(
    public userService: UserService,
  ) {}
  
  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A]
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A]
  rounded-lg w-full mb-4 py-3`

  releases = signal<Release[]>([]);
  tags = signal<string[]>([]);
  months = signal<string[]>([]);

  private releasesService = inject(ReleasesService);

  @Input() tag?: string;
  @Input() month?: string;

  ngOnInit() {
    this.getReleases();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getReleases();
  }

  private getReleases() {
    this.releasesService.getReleases()
    .subscribe({
      next: (releases) => {
        this.releases.set(releases);
      },
      error: () => {
        console.log('Error')
      }
    });
  }
}