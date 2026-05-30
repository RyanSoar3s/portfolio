import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslocoModule

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: {
    '[style.marginBottom]': `(responsive.isXs() || responsive.isSm()) ? '100px' : '0px'`

  }
})
export class Projects implements OnInit {
  protected readonly translocoService = inject(TranslocoService);
  protected readonly responsive = inject(Responsive);

  protected readonly destroyRef = inject(DestroyRef);

  protected projects!: {
    id: number;
    urlImage: string;
    title: string;
    description: string;
    techs: string[];
    linkView: string;
    linkRepo: string;

  }[];

  ngOnInit(): void {
    this.translocoService.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((lang) => {
        const descs = (lang === "pt-BR") ?
                        [
                          "Fiamma Pizza é uma vitrine digital para uma pizzaria de inspiração napolitana.",
                          "Projeto de um serviço de streaming desenvolvido com foco em organização de conteúdos",
                          "O Soletre Game é um jogo de palavras em português que desafia sua criatividade e conhecimento do idioma!"

                        ] :
                        [
                          "Fiamma Pizza is a digital showcase for a Neapolitan-inspired pizzeria.",
                          "Project for a streaming service developed with a focus on content organization",
                          "Soletre Game is a Portuguese word game that challenges your creativity and knowledge of the language!"

                        ];

        this.projects = [
          {
            id: 0,
            urlImage: "assets/images/fiamma-pizza.png",
            title: "Fiamma Pizza",
            description: descs[0],
            techs: [ "TAILWIND", "ANGULAR", "NODEJS", "POSTGRESQL" ],
            linkView: "https://fiamma-pizza.vercel.app/",
            linkRepo: "https://github.com/RyanSoar3s/fiamma_pizza"

          },
          {
            id: 1,
            urlImage: "assets/images/video-streaming.png",
            title: "Video Streaming",
            description: descs[1],
            techs: [ "TAILWIND", "ANGULAR", "NODEJS", "MONGODB" ],
            linkView: "https://video-streaming-tawny-nine.vercel.app/",
            linkRepo: "https://github.com/RyanSoar3s/video-streaming"

          },
          {
            id: 2,
            urlImage: "assets/images/soletre-game.png",
            title: "Soletre Game",
            description: descs[2],
            techs: [ "TAILWIND", "ANGULAR", "NODEJS", "REDIS" ],
            linkView: "https://soletre-game.vercel.app/",
            linkRepo: "https://github.com/RyanSoar3s/soletre-game"

          }

        ];

      });

  }

}
