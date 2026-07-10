import { Component, computed, DOCUMENT, inject, output, Renderer2, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Responsive } from '@services/responsive';
import contentByTranslation from '@utils/translation/translation';
import { Language } from '@services/language';

@Component({
  selector: 'app-header',
  imports: [
    FontAwesomeModule

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
  private language = inject(Language);
  protected readonly responsive = inject(Responsive);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);

  protected readonly faCode = faCode;
  protected readonly faBars = faBars;
  protected readonly faX = faX;

  protected readonly photo = "assets/images/profile.png";

  protected readonly langs = this.language.getAvailableLangs().map((lang) => lang.slice(0, 2));

  languageSelected = signal(this.langs[0]);

  isOpenMenu = signal(false);

  indexByComponent = signal(0);
  navigate = output<number>();

  protected header = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].header;

  });

  changeLang(lang: string): void {
    const currLang = this.language.currLang();
    if (!currLang.includes(lang)) this.language.changeCurrLang()

  }

  onResize(): void {
    if (this.isOpenMenu()) {
      this.isOpenMenu.set(false)
      this.renderer.removeStyle(this.document.body, "overflow");

    };

  }

  toggleMenu(): void {
    this.isOpenMenu.set(!this.isOpenMenu());

    if (this.isOpenMenu()) this.renderer.setStyle(this.document.body, "overflow", "hidden");
    else this.renderer.removeStyle(this.document.body, "overflow");

  }

  navigateByComponent(): void {
    if (this.isOpenMenu()) this.toggleMenu();

    this.navigate.emit(this.indexByComponent());

  }

}
