import { Directive, ElementRef, inject, effect, input } from '@angular/core';
import { Languages } from '@models/code.model';
import { HighlightService } from '@services/highlight';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly hl = inject(HighlightService);

  readonly code = input<string>('');
  readonly language = input<Languages>('html');

  constructor() {
    effect(() => {
      this.render();

    });

  }

  private render(): void {
    const element = this.el.nativeElement;

    delete element.dataset["highlighted"];

    this.hl.highlight(
      element,
      this.code(),
      this.language()

    );

  }

}
