import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.scss',
  imports: [
    CommonModule

  ]
})
export class LanguageToggle {
  private translocoService = inject(TranslocoService);

  protected toggleLanguage(): void {
    const nextLang = (this.translocoService.getActiveLang() === "pt-BR") ? "en" : "pt-BR";
    this.translocoService.setActiveLang(nextLang);

  }

  protected get currentLanguageLabel(): string {
    return (this.translocoService.getActiveLang() === "pt-BR") ? "PT" : "EN";

  }

}
