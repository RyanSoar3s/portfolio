import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';
import { codeBoxesHome } from '@utils/codes/code';
import { CodeBox as TCodeBox, Language, CodeToken } from "@models/code-box.model";

@Component({
  selector: 'app-code-box',
  imports: [
    CommonModule

  ],
  templateUrl: './code-box.html',
  styleUrl: './code-box.scss',
  host: {
    '[style.marginRight]': `(responsive.isXl() || responsive.isLg()) ? '30px' : '0px'`

  }
})
export class CodeBox {
  protected readonly responsive = inject(Responsive);

  protected readonly codeBoxesHome = codeBoxesHome;
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
