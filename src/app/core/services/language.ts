import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class Language {
  private transloco = inject(TranslocoService);

  private currLangSignal = signal(this.transloco.getActiveLang());
  currLang = computed(() => this.currLangSignal());

  changeCurrLang(): void {
    this.transloco.setActiveLang((this.currLangSignal() === "pt-BR") ? "en" : "pt-BR");
    this.currLangSignal.set(this.transloco.getActiveLang());

  }

}
