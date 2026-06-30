import { Component, computed, inject, input, signal } from '@angular/core';
import { Language } from '@services/language';
import contentByTranslation from '@utils/translation/translation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  imports: [
    FontAwesomeModule

  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  private language = inject(Language);
  protected contacts = computed(() => {
    const currLang = this.language.currLang() as keyof typeof contentByTranslation;

    return contentByTranslation[currLang].contacts;

  });

  animate = input.required<boolean>();

  protected readonly cards = [
    {
      icon: faLinkedin,
      title: "LinkedIn",
      label: "Linkedin",
      text: signal("ryan-soares-dev"),
      link: "https://www.linkedin.com/in/ryan-soares-dev/",


    },
    {
      icon: faGithub,
      title: "GitHub",
      label: "Github",
      text: signal("RyanSoar3s"),
      link: "https://github.com/RyanSoar3s"

    },
    {
      icon: faEnvelope,
      title: "E-mail",
      label: "Email",
      text: signal("ryansoares.dev@gmail.com"),
      link: "mailto:ryansoares.dev@gmail.com"

    },
    {
      icon: faWhatsapp,
      title: "WhatsApp",
      label: "Whatsapp",
      text: computed(() => this.contacts().whatsappMsg),
      link: "https://api.whatsapp.com/send/?phone=5579988004580&text&type=phone_number&app_absent=0"

    }

  ];

}
