import { Component, DOCUMENT, inject, Renderer2, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Responsive } from '@services/responsive';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [
    FontAwesomeModule,
    TranslocoModule

  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[style.justify-content]': `(!(responsive.isXs() || responsive.isSm())) ? 'space-around' : 'space-between'`,
    '[style.padding]': `(!(responsive.isXs() || responsive.isSm())) ? '' : '0px 30px'`,
    '[style.backdrop-filter]': `(isOpenMenu()) ? '' : 'blur(20px)'`,
    '(window:resize)': 'void onResize()'

  }

})
export class Header {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);

  protected readonly faCode = faCode;
  protected readonly faBars = faBars;
  protected readonly faX = faX;

  protected readonly photo = "assets/images/profile.png";

  protected readonly langs = this.transloco.getAvailableLangs().map((lang) => lang.toString().slice(0, 2));

  languageSelected = signal(this.langs[0]);

  isOpenMenu = signal(false);

  changeLang(lang: string): void {
    const currLang = this.transloco.getActiveLang();
    if (!currLang.includes(lang)) this.transloco.setActiveLang((currLang === "pt-BR") ? "en" : "pt-BR");

  }

  onResize(): void {
    if (this.isOpenMenu()) this.isOpenMenu.set(false);

  }

  toggleMenu(): void {
    this.isOpenMenu.set(!this.isOpenMenu());

    if (this.isOpenMenu()) this.renderer.setStyle(this.document.body, "overflow", "hidden");
    else this.renderer.removeStyle(this.document.body, "overflow");

  }

}
