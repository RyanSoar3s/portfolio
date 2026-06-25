import { Component, inject, input } from '@angular/core';
import { CodeSnippetModel } from '@models/code.model';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';
import { CodeSnippet } from '@shared/code-snippet/code-snippet';

@Component({
  selector: 'app-home',
  imports: [
    CodeSnippet,
    TranslocoModule

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '[style.flex-direction]': `(responsive.isXl() || responsive.isLg()) ? 'row' : 'column'`,
    '[style.padding]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px 5% 0px 5%'`,
    '[style.gap]': `(responsive.isXl() || responsive.isLg()) ? '0px' : '50px'`

  }

})
export class Home {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);

  animate = input.required<boolean>();

  protected readonly codeSnippet: CodeSnippetModel = {
    codes: [
      {
        "index.html": {
          type: "html",
          code: `
<section class="home">
  <div class="home__tag">
    <h3>FullStack Developer</h3>

  </div>
  <h1 class="home__title">
    Hello, I'm
    <br>
    <span>Ryan Soares</span>

  </h1>

  <p class="home__text">
    I build complete digital products — from intuitive interfaces to scalable back‑end architectures. I craft experiences that are fast, accessible, and built to last.

  </p>

  <div class="home__btns">
    <button class="home__btn-projects">See my work</button>
    <button class="home__btn-contacts">Get in touch</button>

  </div>

</section>

          `

        }

      },
      {
        "styles.scss": {
          type: "scss",
          code: `
.home {
  @include flex;
  @include flex-col;
  @include gap(25px);
  @include z(1);

  &__tag {
    $bgTag: #0dffd712;
    $colorTag: #0dffd7;;
    $fontSpace: var(--font-space);
    $borderTag: 1px solid #0dffd738;

    @include relative;
    @include bg($bgTag);
    @include c($colorTag);
    @include inline-flex;
    @include align-center;
    @include gap(10px);
    @include w(fit-content);
    @include ffamily($fontSpace);
    @include fsize(0.9, em, em);
    @include border(null, $borderTag);
    @include uppercase;
    @include p(7px 16px 7px 23px);
    @include radius(99px);

    @include before("&", "", absolute, (null, 8px, null, null)) {
      @include shrink(0);
      @include dimension(8px, 8px);
      @include bg($colorTag);
      @include radius-full;
      @include shadow(0px 10px $colorTag, 0px 0px 4px $colorTag);

      @include keyframe("pulse-dot", 2.2s ease-in-out infinite) {
        0%, 100% {
          @include opacity(1);
          @include shadow(0px 0px 10px $colorTag, 0px 0px 4px $colorTag);

        }
        50% {
          @include opacity(0.55);
          @include shadow(0px 0px 4px $colorTag);

        }

      };

    }

  }

  &__title {
    $fontSpace: var(--font-space);

    @include c(white);
    @include fsizeclamp(2.4rem, 5vw, 3.8rem);
    @include bold;

    span {
      $bgLinear: 90deg, #0dffd7, #7b61ff;

      @include lgradient(($bgLinear, ));
      @include bgClip(text);
      @include textfillc(transparent);

    }

  }
  p.home__text {
    $textMuted: #7a859c;

    @include c($textMuted);
    @include max-w(440px);
    @include fsize(1.05, em, em);
    @include lineh(1.75);

  }

  .home__btns {
    @include flex;
    @include gap(20px);

    button {
      $fontSpace: var(--font-space);

      @include inline-flex;
      @include align-center;
      @include gap(8px);
      @include p(12px 26px);
      @include radius(8px);
      @include ffamily($fontSpace);
      @include fsize(0.9, em, em);
      @include semibold;
      @include pointer;
      @include border(null, 1.5px solid transparent);
      @include transition((.22s, ));

    }
    .home__btn-projects {
      $gradientBtnProjects: 135deg, #0dffd7, #7b61ff;
      $colorBtnProjects: #070b18;

      @include lgradient(($gradientBtnProjects, ));
      @include c($colorBtnProjects);
      @include cborder(transparent);

      @include hover("&") {
        @include opacity(0.85);
        @include translate((0px, -2px));

      }

    }

    .home__btn-contacts {
      $colorBtnContacts: #dde4f0;
      $borderColorBtnContacts: #1e2640;

      @include bg(transparent);
      @include c($colorBtnContacts);
      @include cborder($borderColorBtnContacts);

      @include hover("&") {
        $borderColorBtnContactsHover: #7b61ff;

        @include c(white);
        @include cborder($borderColorBtnContactsHover);
        @include translate((0px, -2px));

      }

    }

  }

}

          `

        }

      }

    ],
    tabs: [ "index.html", "styles.scss" ]

  };

}
