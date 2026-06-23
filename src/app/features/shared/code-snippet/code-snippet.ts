import { Component, signal, input, OnInit, computed, inject } from '@angular/core';
import { HighlightDirective } from '@directives/highlight';
import type { CodeSnippetModel, FileName, Languages } from '@models/code.model';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-code-snippet',
  imports: [
    HighlightDirective

  ],
  templateUrl: './code-snippet.html',
  styleUrl: './code-snippet.scss',
  host: {
    '[style.height]': 'height()',
    '[style.width]': `(responsive.isXl() || responsive.isLg()) ? '45vw' : '90vw'`,
    '[style.max-width]': 'width()'

  }
})
export class CodeSnippet implements OnInit {
  protected readonly responsive = inject(Responsive);

  protected height = input("440px");
  protected width = input("532px");

  codes = input.required<CodeSnippetModel>();

  protected tabSelected = signal<string>("");
  protected language = signal<Languages | undefined>(undefined);

  private codeSignal = signal("");
  protected code = computed(() => this.codeSignal());


  ngOnInit(): void {
    const fileName = this.codes().tabs[0];
    this.tabSelected.set(fileName);


    const code = this.codes().codes[0][fileName]!;
    this.language.set(code.type);
    this.codeSignal.set(code.code);

  }

  changeCode(index: number, tab: FileName): void {
    this.tabSelected.set(tab);

    const code = this.codes().codes[index][tab]!;
    this.language.set(code.type);
    this.codeSignal.set(code.code);

  }

}
