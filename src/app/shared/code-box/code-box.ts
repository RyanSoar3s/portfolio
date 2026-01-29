import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Responsive } from '@services/responsive';
import { codeBoxes } from '@utils/codes/code';
import { CodeBox as TCodeBox, Language, CodeToken } from "@models/code-box.model";
import { OutputButton } from '@utils/previews/output-button/output-button';
import { OutputLoader } from '@utils/previews/output-loader/output-loader';
import { OutputReactiveInput } from '@utils/previews/output-reactive-input/output-reactive-input';
@Component({
  selector: 'app-code-box',
  imports: [
    CommonModule,
    OutputButton,
    OutputLoader,
    OutputReactiveInput

  ],
  templateUrl: './code-box.html',
  styleUrl: './code-box.scss',
  host: {
    '[style.marginRight]': `(responsive.isXl() || responsive.isLg()) ? '30px' : '0px'`

  }
})
export class CodeBox {
  public boxName = input.required<keyof typeof codeBoxes>();

  protected readonly responsive = inject(Responsive);

  protected readonly tabs = computed(() => codeBoxes[this.boxName()].tabs);
  protected readonly boxes = computed(() => [ ...codeBoxes[this.boxName()].codeBoxes, codeBoxes[this.boxName()].output ]);

  protected selectedLineIndex = 0;
  protected selectedFileIndex = 0;

  changeFile(index: number) {
    this.selectedFileIndex = index;
    this.selectedLineIndex = 0;

  }

  getCodeToken(box: TCodeBox<string, Language>): CodeToken[][] {
    const key = `${box.title}.${box.language}` as keyof typeof box.code;
    return box.code[key];

  }

}
