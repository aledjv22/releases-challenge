import { Component, Input, OnInit, signal } from '@angular/core';
import { format } from 'date-fns';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { ReleasesService } from '@services/releases.service';
import { UserService } from '@services/user.service'

@Component({
  selector: 'app-release-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './release-edit.component.html'
})
export default class ReleaseEditComponent implements OnInit {
  @Input() id?: string;

  editSuccess = signal(false);

  formRelease: FormGroup;
  readonly stylesInput = 'bg-transparent border-2 border-[#FD7658] outline-[#FFA07A] rounded-lg w-full px-2 py-1 mb-2';

  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-full mt-3 py-3`;

  constructor (
    private releaseService: ReleasesService,
    private userService: UserService
  ) {
    this.formRelease = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      tag: new FormControl(''),
      created_at: new FormControl(''),
      version: new FormControl(''),
      user_email: new FormControl(this.userService.user().email)
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.releaseService.getReleaseById(this.id).then(release => {
        this.formRelease.setValue({
          title: release.title,
          description: release.description,
          tag: release.tag,
          created_at: format(new Date(release.created_at), 'dd/MM/yyyy'),
          version: release.version,
          user_email: release.user_email
        });
      });
    }
  }

  async onSubmit() {
    const formData = this.formRelease.value;
    const originalDate = new Date(formData.created_at);
    formData.created_at = format(originalDate, 'ddMMMyy');
  
    if (this.id) {
      await this.releaseService.patchRelease(this.id, formData);
      this.editSuccess.set(true);
    }
  }

  async onClick() {
    const response = await this.releaseService.getReleaseById(this.id!);
    if (response) {
      this.editSuccess.set(true);
    }
  }
}