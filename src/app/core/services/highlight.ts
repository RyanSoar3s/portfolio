import { Injectable } from '@angular/core';
import { Languages } from '@models/code.model';
import hljs, { type LanguageFn } from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import sql from "highlight.js/lib/languages/sql";
import Dockerfile from "highlight.js/lib/languages/dockerfile";

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private languages: Record<Languages, LanguageFn> = {
    html: xml,
    css,
    scss,
    js: javascript,
    ts: typescript,
    sql,
    Dockerfile
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
