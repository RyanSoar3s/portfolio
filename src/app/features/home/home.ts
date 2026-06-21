import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-home',
  imports: [
    TranslocoModule

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);

}
