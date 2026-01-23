import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [
    CommonModule

  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
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
