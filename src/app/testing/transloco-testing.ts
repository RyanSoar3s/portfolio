import { provideTransloco, TranslocoLoader } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';

class TestingTranslocoLoader implements TranslocoLoader {
  getTranslation(): Observable<Record<string, string>> {
    return of({});
  }
}

export const translocoTestingProviders = provideTransloco({
  config: {
    availableLangs: ['pt-BR', 'en'],
    defaultLang: 'en',
    reRenderOnLangChange: true,
    prodMode: true
  },
  loader: TestingTranslocoLoader
});
