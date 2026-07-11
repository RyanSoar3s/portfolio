import { Component, computed, inject } from '@angular/core';
import { ActiveElement } from '@directives/active-element';
import { Language } from '@services/language';
import { StateComponents } from '@services/state-components';
import contentByTranslation from '@utils/translation/translation';

@Component({
  selector: 'app-projects',
  imports: [
    ActiveElement
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  private language = inject(Language);
  protected readonly stateComponents = inject(StateComponents);

  isTarget = computed(() => this.stateComponents.visibleComponents()["projects"].isTarget);

  protected projects = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].projects;

  });

  protected readonly projectCards = [
    {
      img: "assets/images/playground.png",
      name: "playground",
      desc: computed(() => this.projects().descs[0]),
      tags: [
        "Sass",
        "Angular",
        "Bun",
        "Docker"

      ],
      linkSite: "",
      linkRepo: "https://github.com/RyanSoar3s/playground"

    },
    {
      img: "assets/images/fiamma-pizza.png",
      name: "fiamma pizza",
      desc: computed(() => this.projects().descs[1]),
      tags: [
        "Tailwindcss",
        "Angular",
        "NodeJS",
        "PostgreSQL"

      ],
      linkSite: "https://fiamma-pizza.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/fiamma_pizza"

    },
    {
      img: "assets/images/video-streaming.png",
      name: "video streaming",
      desc: computed(() => this.projects().descs[2]),
      tags: [
        "Tailwindcss",
        "Angular",
        "NodeJS",
        "MongoDB"

      ],
      linkSite: "https://video-streaming-tawny-nine.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/video-streaming"

    }

  ] as const;

}
