import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-contacts',
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslocoModule

  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  host: {
    '[style.marginBottom]': `(responsive.isXs() || responsive.isSm()) ? '100px' : '0px'`

  }
})
export class Contacts implements OnInit {
  protected readonly translocoService = inject(TranslocoService);
  protected readonly destroyRef = inject(DestroyRef);

  protected contacts!: {
    icon: IconDefinition;
    title: string;
    info: string;
    link: string;
    styleClass: string;

  }[];

  protected readonly responsive = inject(Responsive);

  ngOnInit(): void {
    this.translocoService.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((lang) => {
        const descs = (lang === 'pt-BR') ?
                        [
                          'Networking & Carreira',
                          'Meus Projetos',
                          'Resposta imediata para orçamentos e dúvidas'

                        ] :
                        [
                          'Networking & Career',
                          'My Projects',
                          'Immediate response to budget and queries'

                        ];

        this.contacts = [
          {
            icon: faLinkedin,
            title: 'LinkedIn',
            info: descs[0],
            link: 'https://www.linkedin.com/in/ryan-soares-dev/',
            styleClass: 'linkedin'

          },
          {
            icon: faGithub,
            title: 'GitHub',
            info: descs[1],
            link: 'https://github.com/RyanSoar3s',
            styleClass: 'github'

          },
          {
            icon: faEnvelope,
            title: 'E-mail',
            info: 'ryansoares.dev@gmail.com',
            link: 'mailto:ryansoares.dev@gmail.com',
            styleClass: 'email'

          },
          {
            icon: faWhatsapp,
            title: 'WhatsApp',
            info: descs[2],
            link: 'https://api.whatsapp.com/send/?phone=5579988004580&text&type=phone_number&app_absent=0',
            styleClass: 'whatsapp'

          }

        ];
      });

  }

}
