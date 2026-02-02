import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-output-button',
  imports: [
    CommonModule

  ],
  templateUrl: './output-button.html',
  styleUrl: './output-button.scss',
  host: {
    '[style.backgroundColor]': `'white'`,
    '[style.display]': `'block'`,
    '[style.height]': `'260px'`,
    '[style.width]': `'100%'`,
    '[style.overflow]': `'hidden'`

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputButton {
  public html = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  public sanitizedHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.html()));

}
