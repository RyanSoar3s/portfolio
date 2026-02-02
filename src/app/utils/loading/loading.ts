import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [
    CommonModule

  ],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
  host: {
    '[style.visibility]': `(isLoading()) ? 'visible' : 'hidden'`

  }
})
export class Loading {
  isLoading = input.required<boolean>();

}
