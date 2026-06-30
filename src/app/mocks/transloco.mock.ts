import { Provider } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export class TranslocoServiceMock {
  private activeLang = 'pt-BR';

  getActiveLang(): string {
    return this.activeLang;
  }

  setActiveLang(lang: string): void {
    this.activeLang = lang;
  }

  getAvailableLangs(): string[] {
    return [ 'pt-BR', 'en' ];
  }
}

export const translocoTestingProvider: Provider = {
  provide: TranslocoService,
  useClass: TranslocoServiceMock
};
