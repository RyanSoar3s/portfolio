import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-about-me',
  imports: [
    CommonModule

  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  host: {
  '[style.marginBottom]': `(responsive.isXl()) ? '0px' : '100px'`

}
})
export class AboutMe {
  protected readonly responsive = inject(Responsive);

  protected readonly techs = [
    { tech: "HTML", styleClass: "html" },
    { tech: "CSS", styleClass: "css" },
    { tech: "Sass", styleClass: "sass" },
    { tech: "Tailwind", styleClass: "tailwind" },
    { tech: "Angular", styleClass: "angular" },
    { tech: "NodeJS", styleClass: "nodejs" },
    { tech: "Redis", styleClass: "redis" },
    { tech: "MongoDB", styleClass: "mongodb" }

  ];

}
