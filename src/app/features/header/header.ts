import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Responsive } from '@services/responsive';

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

  }

})
export class Header {
  responsive = inject(Responsive);

  protected readonly faCode = faCode;
  protected readonly faBars = faBars;
  protected readonly faX = faX;

  protected readonly photo = "assets/images/profile.png";

  protected readonly langs = [ "en", "pt" ];

  languageSelected = signal(this.langs[0]);

  isOpenMenu = signal(false);

}
