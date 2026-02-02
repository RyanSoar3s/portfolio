import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-output-loader',
  imports: [
    CommonModule

  ],
  templateUrl: './output-loader.html',
  styleUrl: './output-loader.scss',
  host: {
    '[style.backgroundColor]': `'white'`,
    '[style.display]': `'block'`,
    '[style.height]': `'260px'`,
    '[style.width]': `'100%'`,
    '[style.paddingTop]': `'5px'`,
    '[style.overflow]': `'hidden'`

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputLoader {
  public html = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  public sanitizedHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.html()));

}
