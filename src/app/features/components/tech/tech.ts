import { Component, computed, inject, input, signal } from '@angular/core';
import { Responsive } from '@services/responsive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Language } from '@services/language';
import contentByTranslation from '@utils/translation/translation';
import { codeSnippetOutputHtml } from '@utils/code-snippets/snippets';
import { CodeSnippetModel } from '@models/code.model';
import { CodeSnippet } from '@shared/code-snippet/code-snippet';

@Component({
  selector: 'app-tech',
  imports: [
    FontAwesomeModule,
    CodeSnippet

  ],
  templateUrl: './tech.html',
  styleUrl: './tech.scss'
})
export class Tech {
  protected readonly responsive = inject(Responsive);

  private language = inject(Language);
  protected tech = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].tech;

  });

  animate = input.required<boolean>();

  protected selectedTech = signal<string | undefined>(undefined);
  protected selectedTechLogoUrl = signal<string | undefined>(undefined);
  protected selectedDescIndex: number | undefined = undefined;

  protected readonly faX = faX;

  protected readonly outputComponents: Record<string, CodeSnippetModel> = {
    "html5": codeSnippetOutputHtml

  }

  private codeSnippetSignal = signal<CodeSnippetModel | undefined>(undefined);
  protected readonly codeSnippet = computed(() => this.codeSnippetSignal());

  selectTech(tech: string, pathUrl: string, indexDesc: number): void {
    if (!this.selectedTech() || this.selectedTech() !== tech) {
      this.selectedTech.set(tech);
      this.selectedTechLogoUrl.set(pathUrl);
      this.selectedDescIndex = indexDesc;

      const key = (this.selectedTech()!).toLocaleLowerCase();
      this.codeSnippetSignal.set(this.outputComponents[key]);

      return;

    }

    this.resetTech();

  }

  resetTech(): void {
    this.selectedTech.set(undefined);
    this.selectedTechLogoUrl.set(undefined);
    this.selectedDescIndex = undefined;

  }

}
