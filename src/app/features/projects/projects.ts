import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    NgOptimizedImage

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: {
    '[style.marginBottom]': `(responsive.isXs() || responsive.isSm()) ? '100px' : '0px'`

  }
})
export class Projects {
  protected readonly responsive = inject(Responsive);

  protected readonly projects = [
    {
      id: 0,
      urlImage: "assets/images/video-streaming.png",
      title: "Video Streaming",
      description: "Projeto de um serviço de streaming desenvolvido com foco em organização de conteúdos",
      techs: [ "TAILWIND", "ANGULAR", "NODEJS", "MONGODB" ],
      linkView: "https://video-streaming-tawny-nine.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/video-streaming"

    },
    {
      id: 1,
      urlImage: "assets/images/soletre-game.png",
      title: "Soletre Game",
      description: "O Soletre Game é um jogo de palavras em português que desafia sua criatividade e conhecimento do idioma!",
      techs: [ "TAILWIND", "ANGULAR", "NODEJS", "REDIS" ],
      linkView: "https://soletre-game.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/soletre-game"

    },
    {
      id: 2,
      urlImage: "assets/images/loja-online.png",
      title: "Loja Online",
      description: "Este projeto é uma loja online simples desenvolvida em Angular",
      techs: [ "HTML", "SASS", "ANGULAR" ],
      linkView: "https://loja-online-peach.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/Loja-Online"

    },

  ];

}
