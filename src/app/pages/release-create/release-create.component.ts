import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ReleasesService } from '@services/releases.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-release-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './release-create.component.html'
})
export default class ReleaseCreateComponent implements OnInit {
  readonly stylesInput = 'bg-transparent border-2 border-[#FD7658] outline-[#FFA07A] rounded-lg w-full px-2 py-1 mb-2';

  readonly stylesButton = `bg-gradient-to-r from-[#FD7658] to-[#FFA07A] 
  hover:bg-gradient-to-r hover:to-[#FD7658] hover:from-[#FFA07A] 
  rounded-lg w-full mt-3 py-3`;

  idRelease = signal('');
  releaseSuccess = signal(false);

  formRelease: FormGroup;

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

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.releaseService.postRelease(this.formRelease.value);
    this.idRelease.set(response.id);
    this.releaseSuccess.set(this.idRelease() !== '');
  }

  async onClick() {
    await this.releaseService.getReleaseById(this.idRelease());
  }
}
