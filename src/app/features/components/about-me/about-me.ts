import { Component, inject, input } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-about-me',
  imports: [
    TranslocoModule

  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  host: {

  }
})
export class AboutMe {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);

  animate = input.required<boolean>();

  protected readonly photo = "assets/images/profile-about-me.png";

}
