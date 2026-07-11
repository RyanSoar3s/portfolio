import { Component, computed, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Language } from '@services/language';
import contentByTranslation from '@utils/translation/translation';
import {
  codeSnippetOutputAngular,
  codeSnippetOutputBun,
  codeSnippetOutputCss,
  codeSnippetOutputDocker,
  codeSnippetOutputHtml,
  codeSnippetOutputJest,
  codeSnippetOutputMongoDB,
  codeSnippetOutputNodeJS,
  codeSnippetOutputPostgreSQL,
  codeSnippetOutputRedis,
  codeSnippetOutputSass,
  codeSnippetOutputTailwindcss,
  codeSnippetOutputVite,
  codeSnippetOutputVitest

} from '@utils/code-snippets/snippets';
import { CodeSnippetModel } from '@models/code.model';
import { CodeSnippet } from '@shared/code-snippet/code-snippet';
import { StateComponents } from '@services/state-components';
import { ActiveElement } from '@directives/active-element';

@Component({
  selector: 'app-tech',
  imports: [
    FontAwesomeModule,
    CodeSnippet,
    ActiveElement
  ],
  templateUrl: './tech.html',
  styleUrl: './tech.scss'
})
export class Tech {
  private language = inject(Language);
  protected readonly stateComponents = inject(StateComponents);

  isTarget = computed(() => this.stateComponents.visibleComponents()["tech"].isTarget);

  protected tech = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].tech;

  });

  protected selectedTech = signal<string | undefined>(undefined);
  protected selectedTechLogoUrl = signal<string | undefined>(undefined);
  protected selectedDescIndex: number | undefined = undefined;

  protected readonly faX = faX;

  protected readonly outputComponents: Record<string, CodeSnippetModel> = {
    "html5": codeSnippetOutputHtml,
    "css3": codeSnippetOutputCss,
    "sass": codeSnippetOutputSass,
    "tailwindcss": codeSnippetOutputTailwindcss,
    "angular": codeSnippetOutputAngular,
    "nodejs": codeSnippetOutputNodeJS,
    "bun": codeSnippetOutputBun,
    "postgresql": codeSnippetOutputPostgreSQL,
    "mongodb": codeSnippetOutputMongoDB,
    "redis": codeSnippetOutputRedis,
    "vite": codeSnippetOutputVite,
    "vitest": codeSnippetOutputVitest,
    "jest": codeSnippetOutputJest,
    "docker": codeSnippetOutputDocker

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
