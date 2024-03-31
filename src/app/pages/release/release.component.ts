import { Component, Input, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Release } from '@models/release.model';
import { ReleasesService } from '@services/releases.service';

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './release.component.html'
})
export default class ReleaseComponent {

  @Input() id?: string;

  release = signal<Release | null>(null);

  constructor(private releaseService: ReleasesService) {}

  ngOnInit() {
    if (this.id) {
      this.releaseService.getReleaseById(this.id)
        .then(release => this.release.set(release))
        .catch(error => console.log(error));
    }
  }
}
