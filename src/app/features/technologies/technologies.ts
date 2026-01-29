import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';
import { CodeBox } from '@shared/code-box/code-box';
import { codeBoxes } from '@utils/codes/code';

@Component({
  selector: 'app-technologies',
  imports: [
    CommonModule,
    CodeBox

  ],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss'
})
export class Technologies {
  protected readonly responsive = inject(Responsive);

  protected readonly boxes = [ "button", "loader" ] as Array<keyof typeof codeBoxes>;

}
