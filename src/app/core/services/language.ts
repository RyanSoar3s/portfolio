import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Language {
  private readonly availableLangs = [ 'en', 'pt-BR' ] as const;

  private currLangSignal = signal<typeof this.availableLangs[number]>('en');
  currLang = computed(() => this.currLangSignal());

  getAvailableLangs(): string[] {
    return [ ...this.availableLangs ];
  }

  changeCurrLang(): void {
    this.currLangSignal.update((curr) => curr === 'pt-BR' ? 'en' : 'pt-BR');

  }

}
