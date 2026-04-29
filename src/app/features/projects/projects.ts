import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
    const lang = this.translocoService.getActiveLang();
    const descs = (lang === "pt-BR") ?
                    [
                      "Landing page responsiva e moderna para venda de um curso completo de guitarra",
                      "Projeto de um serviço de streaming desenvolvido com foco em organização de conteúdos",
                      "O Soletre Game é um jogo de palavras em português que desafia sua criatividade e conhecimento do idioma!"

                    ] :
                    [
                      "Responsive and modern landing page for selling a complete guitar course",
                      "Project for a streaming service developed with a focus on content organization",
                      "Soletre Game is a Portuguese word game that challenges your creativity and knowledge of the language!"

                    ];

    this.projects = [
      {
        id: 0,
        urlImage: "assets/images/guitar-academy-pro.png",
        title: "Guitar Academy Pro",
        description: descs[0],
        techs: [ "HTML 5", "CSS 3", "JavaScript", "Vite" ],
        linkView: "https://landing-page-guitar-academy-pro.vercel.app/",
        linkRepo: "https://github.com/RyanSoar3s/landing-page---guitar-academy-pro"

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

  }

}
