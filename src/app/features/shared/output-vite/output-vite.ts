import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-vite',
  imports: [],
  templateUrl: './output-vite.html',
  styleUrl: './output-vite.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputVite {
  count = signal(0);

}
