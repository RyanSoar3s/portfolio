import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-contacts',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  protected readonly contacts = [
    {
      icon: faLinkedin,
      title: "LinkedIn",
      info: "Networking & Carreira",
      link: "https://www.linkedin.com/in/ryan-soares-dev/",
      styleClass: "linkedin"

    },
    {
      icon: faGithub,
      title: "GitHub",
      info: "Meus Projetos",
      link: "https://github.com/RyanSoar3s",
      styleClass: "github"

    },
    {
      icon: faEnvelope,
      title: "E-mail",
      info: "ryansoares.dev@gmail.com",
      link: "mailto:ryansoares.dev@gmail.com",
      styleClass: "email"

    },
    {
      icon: faWhatsapp,
      title: "WhatsApp",
      info: "Resposta imediata para orçamentos e dúvidas",
      link: "https://api.whatsapp.com/send/?phone=5579988004580&text&type=phone_number&app_absent=0",
      styleClass: "whatsapp"

    }

  ];

  protected readonly responsive = inject(Responsive);

}
