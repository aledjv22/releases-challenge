import { Component, Input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { Release } from '@models/release.model';
import { ReleasesService } from '@services/releases.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [RouterLinkWithHref, DatePipe],
  templateUrl: './release.component.html'
})
export default class ReleaseComponent {

  @Input() id?: string;

  release = signal<Release | null>(null);

  constructor(
    private releaseService: ReleasesService,
    public userService: UserService
  ) {}

  ngOnInit() {
    if (this.id) {
      this.releaseService.getReleaseById(this.id)
        .then(release => this.release.set(release))
        .catch(error => console.log(error));
    }
  }

  async deleteRelease() {
    if (this.release()?.id) {
      const response = await this.releaseService.deleteRelease(this.release()!);
    }
  }
}
