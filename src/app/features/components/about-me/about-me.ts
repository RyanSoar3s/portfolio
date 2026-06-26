import { Component, computed, inject, input } from '@angular/core';
import { Language } from '@services/language';
import { Responsive } from '@services/responsive';
import contentByTranslation from '@utils/translation/translation';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  host: {

  }
})
export class AboutMe {
  private language = inject(Language);

  protected aboutMe = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].aboutMe;

  });
  protected readonly responsive = inject(Responsive);

  animate = input.required<boolean>();

  protected readonly photo = "assets/images/profile-about-me.png";

}
