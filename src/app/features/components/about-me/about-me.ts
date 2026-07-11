import { Component, computed, inject } from '@angular/core';
import { ActiveElement } from '@directives/active-element';
import { Language } from '@services/language';
import { Responsive } from '@services/responsive';
import { StateComponents } from '@services/state-components';
import contentByTranslation from '@utils/translation/translation';

@Component({
  selector: 'app-about-me',
  imports: [
    ActiveElement
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private language = inject(Language);
  protected readonly stateComponents = inject(StateComponents);

  protected aboutMe = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].aboutMe;

  });
  protected readonly responsive = inject(Responsive);

  isTarget = computed(() => this.stateComponents.visibleComponents()["about-me"].isTarget);

  protected readonly photo = "assets/images/profile-about-me.png";

}
