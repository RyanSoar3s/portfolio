import { Component, signal, input, OnInit, computed, inject, effect, type Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { HighlightDirective } from '@directives/highlight';
import type { CodeSnippetModel, FileName, Languages } from '@models/code.model';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-code-snippet',
  imports: [
    HighlightDirective,
    NgComponentOutlet

  ],
  templateUrl: './code-snippet.html',
  styleUrl: './code-snippet.scss',
  host: {
    '[style.height]': 'height()',
    '[style.width]': 'width()',
    '[style.max-width]': 'maxWidth()'

  }
})
export class CodeSnippet implements OnInit {
  protected readonly responsive = inject(Responsive);

  height = input.required<string>()
  width = input.required<string>()
  maxWidth = input<string>();

  codes = input.required<CodeSnippetModel>();

  protected tabSelected = signal<string>("");
  protected language = signal<Languages | undefined>(undefined);

  private codeSignal = signal("");
  protected code = computed(() => this.codeSignal());

  protected render = signal<Type<unknown> | undefined>(undefined);

  constructor() {
    effect(() => {
      const code = this.codes();

      if (!code || !("render" in code) || typeof code.render !== "function") return;

      code.render().then((component) => this.render.set(component));

    });

  }

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
