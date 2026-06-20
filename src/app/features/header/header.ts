import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [
    FontAwesomeModule

  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'

})
export class Header {
  protected readonly faCode = faCode;
  protected readonly photo = "assets/images/profile.png";

  protected readonly langs = [ "en", "pt" ];

  languageSelected = signal(this.langs[0]);

}
