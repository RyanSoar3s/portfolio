import { Component, inject, signal } from '@angular/core';
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
    '(window:resize)': 'void onResize()'

  }

})
export class Header {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);

  protected readonly faCode = faCode;
  protected readonly faBars = faBars;
  protected readonly faX = faX;

  protected readonly photo = "assets/images/profile.png";

  protected readonly langs = this.transloco.getAvailableLangs().map((lang) => lang.toString().slice(0, 2));

  languageSelected = signal(this.langs[0]);

  isOpenMenu = signal(false);

  onResize(): void {
    if (this.isOpenMenu()) this.isOpenMenu.set(false);

  }

}
