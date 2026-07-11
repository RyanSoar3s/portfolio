import { Component, computed, inject, output } from '@angular/core';
import { Responsive } from '@services/responsive';
import { CodeSnippet } from '@shared/code-snippet/code-snippet';
import { Language } from '@services/language';
import contentByTranslation from '@utils/translation/translation';
import { codeSnippetHome } from '@utils/code-snippets/snippets';
import { StateComponents } from '@services/state-components';
import { ActiveElement } from '@directives/active-element';

@Component({
  selector: 'app-home',
  imports: [
    CodeSnippet,
    ActiveElement
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '[style.padding]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px 5% 0px 5%'`,
    '[style.gap]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px'`

  }

})
export class Home {
  private language = inject(Language);
  protected readonly stateComponents = inject(StateComponents);
  protected readonly responsive = inject(Responsive);

  isTarget = computed(() => this.stateComponents.visibleComponents()["home"].isTarget);

  protected home = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].home;

  });

  protected readonly codeSnippetHome = codeSnippetHome;

  navigate = output<number>();

  navigateByComponent(index: number): void {
    this.navigate.emit(index);

  }

}
