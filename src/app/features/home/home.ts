import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';
import { CodeBox } from '@shared/code-box/code-box';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CodeBox

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '[style.flexDirection]': `(responsive.isXl() || responsive.isLg()) ? 'row' : 'column'`
  }

})
export class Home {
  protected readonly responsive = inject(Responsive);

}
