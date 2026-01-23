import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule

  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host: {
    '[style.marginTop]': `(responsive.isXs() || responsive.isSm()) ? '80px' : '0px'`

  }
})
export class Footer {
  protected readonly responsive = inject(Responsive);
  protected currentYear = new Date().getFullYear();

}
