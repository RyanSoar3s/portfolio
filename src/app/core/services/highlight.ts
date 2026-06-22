import { Injectable } from '@angular/core';
import { Languages } from '@models/code.model';
import hljs, { type LanguageFn } from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml'
import scss from 'highlight.js/lib/languages/scss'

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private languages: Record<Languages, LanguageFn> = {
    html: xml,
    scss
  };

  constructor() {
    for (const [name, lang] of Object.entries(this.languages)) {
      hljs.registerLanguage(name, lang);

    }

  }

  highlight(element: HTMLElement, code: string, language: Languages): void {
    const result = hljs.highlight(code, { language });

    element.innerHTML = result.value;
    
  }

}
