import { Component, computed, inject, input, output } from '@angular/core';
import { Responsive } from '@services/responsive';
import { CodeSnippet } from '@shared/code-snippet/code-snippet';
import { Language } from '@services/language';
import contentByTranslation from '@utils/translation/translation';
import { codeSnippetHome } from '@utils/code-snippets/snippets';

@Component({
  selector: 'app-home',
  imports: [
    CodeSnippet

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '[style.flex-direction]': `(responsive.isXl() || responsive.isLg()) ? 'row' : 'column'`,
    '[style.padding]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px 5% 0px 5%'`,
    '[style.gap]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px'`

  }

})
export class Home {
  private language = inject(Language);
  protected readonly responsive = inject(Responsive);

  animate = input.required<boolean>();

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
