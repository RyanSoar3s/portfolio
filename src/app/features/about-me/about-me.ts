import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-about-me',
  imports: [
    CommonModule,
    TranslocoModule

  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  host: {
  '[style.marginBottom]': `(responsive.isXl()) ? '0px' : '100px'`

}
})
export class AboutMe {
  protected readonly translocoService = inject(TranslocoService);
  protected readonly responsive = inject(Responsive);

  protected readonly techs = [
    { tech: "HTML", styleClass: "html" },
    { tech: "CSS", styleClass: "css" },
    { tech: "Sass", styleClass: "sass" },
    { tech: "Tailwind", styleClass: "tailwind" },
    { tech: "Angular", styleClass: "angular" },
    { tech: "NodeJS", styleClass: "nodejs" },
    { tech: "Redis", styleClass: "redis" },
    { tech: "MongoDB", styleClass: "mongodb" },
    { tech: "PostgreSQL", styleClass: "postgresql" },
    { tech: "Vite", styleClass: "vite" },
    { tech: "Jest", styleClass: "jest" },
    { tech: "Vitest", styleClass: "vitest" },
    { tech: "Docker", styleClass: "docker" },
    { tech: "Bun", styleClass: "bun" }
  ];

}
