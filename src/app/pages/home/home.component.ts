import { Component, Input, inject, SimpleChanges, signal } from '@angular/core';
import { RouterLinkWithHref, ActivatedRoute } from '@angular/router';
import { parse } from 'date-fns';

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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  constructor(
    public userService: UserService,
    private route: ActivatedRoute
  ) {}

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
      next: (releases: Release[]) => {
        const queryParams = this.route.snapshot.queryParams;

        let queryDate = queryParams['month'] ? 
        parse(queryParams['month'], 'ddMMMyy', new Date()) : null;
    
        const queryTag = queryParams['tag'] || null;

        const filteredReleases = releases.filter(release => {
          const createdAt = new Date(release.created_at);
    
          return (!queryDate || 
          (createdAt.getMonth() === queryDate.getMonth() 
          && createdAt.getFullYear() === queryDate.getFullYear())) 
          && (!queryTag || release.tag === queryTag);
        });
    
        this.releases.set(filteredReleases);
      },
      error: () => {
        console.log('Error')
      }
    });
  }
}