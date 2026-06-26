import { CodeSnippetModel } from "@models/code.model";

export const codeSnippetHome: CodeSnippetModel = {
    tabs: [ "index.html", "styles.scss" ],
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

  ]

};

export const codeSnippetOutputHtml: CodeSnippetModel = {
  tabs: [ "index.html", "output" ],
  codes: [
    {
      "index.html": {
        type: "html",
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Semantic Page</title>
</head>
<body>

    <!-- header: The main header of the website (logo, main title, etc.) -->
    <header>
        <h1>My Content Portal</h1>
        <!-- nav: Block of main navigation links -->
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- main: The primary and unique content of this specific page -->
    <main>

        <!-- section: Groups contents that share a common theme or topic -->
        <section id="blog">
            <h2>Latest from the Blog</h2>

            <!-- article: A complete and independent piece of content (e.g., a post, news item) -->
            <article>
                <h3>Understanding Semantic HTML</h3>
                <!-- time: Represents a machine-readable date or time -->
                <p>Published on <time datetime="2026-06-26">June 26, 2026</time></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>

            <article>
                <h3>Why Learn CSS Grid?</h3>
                <p>Published on <time datetime="2026-06-20">June 20, 2026</time></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum hendrerit lacus. Proin interdum sodales nisl. Nunc elementum dolor non nunc pretium vulputate. Morbi vitae lectus ac leo dictum sodales.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam interdum convallis massa, sit amet lacinia lectus scelerisque vitae. Curabitur sed nisl eget augue condimentum sodales eget id lacus.</p>
            </article>
        </section>

        <!-- New section added to expand the layout structure -->
        <section id="tutorials">
            <h2>Featured Tutorials</h2>

            <article>
                <h3>Getting Started with JavaScript</h3>
                <p>Published on <time datetime="2026-06-15">June 15, 2026</time></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet dictum purus, non condimentum est scelerisque ac. Vestibulum tristique feugiat turpis, in varius metus tristique id.</p>
                <p>Phasellus efficitur eros vel magna fringilla, ac gravida nisl sodales. Vivamus efficitur tellus id nisl tempus aliquam. In feugiat dolor in diam pellentesque accumsan.</p>
            </article>
        </section>

        <!-- aside: Content indirectly related to the main content (e.g., sidebar, author bio) -->
        <aside>
            <h3>About the Author</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Maecenas ac nisl rhoncus, tempor urna ut, congue nisl.</p>
        </aside>

    </main>

    <!-- footer: The footer of the page (copyrights, support links, etc.) -->
    <footer>
        <p>&copy; 2026 My Content Portal. Lorem ipsum dolor sit amet.</p>
    </footer>

</body>
</html>

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-html/output-html").then((m) => m.OutputHtml)

};
