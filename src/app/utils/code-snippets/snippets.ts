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

export const codeSnippetOutputCss: CodeSnippetModel = {
  tabs: [ "index.html", "styles.css", "output" ],
  codes: [
    {
      "index.html": {
        type: "html",
        code: `
<!-- The HTML structure provides the raw content -->
<div class="profile-card">
  <!-- Using a placeholder image for the avatar -->
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256" alt="Alex Morgan" class="profile-img">
  <h2 class="profile-name">Alex Morgan</h2>
  <p class="profile-title">UX/UI Designer</p>
  <p class="profile-bio">Passionate about creating beautiful, user-centered digital experiences. Let's build something amazing together!</p>
  <button class="btn-follow">Follow Me</button>

</div>

        `

      }

    },
    {
      "styles.css": {
        type: "css",
        code: `
/* 2. Card Container: Turning a boring box into a sleek card */
.profile-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 320px;
  text-align: center;
  transition: transform 0.3s ease;

}

/* Hover effect to make it interactive */
.profile-card:hover {
  transform: translateY(-5px);

}

/* 3. Image Styling: Making the square image a perfect circle */
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4f46e5;
  margin-bottom: 15px;

}

/* 4. Typography: Adding hierarchy with colors and sizes */
.profile-name {
  font-size: 24px;
  color: #1f2937;
  margin: 10px 0 5px 0;

}

.profile-title {
  font-size: 14px;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 15px;

}

.profile-bio {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 20px;

}

/* 5. Button: Styling a call-to-action */
.btn-follow {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

}

.btn-follow:hover {
  background-color: #3730a3;

}

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-css/output-css").then((m) => m.OutputCss)

};

export const codeSnippetOutputSass: CodeSnippetModel = {
  tabs: [ "index.html", "styles.scss", "output" ],
  codes: [
    {
      "index.html": {
        type: "html",
        code: `
<main class="container">
  <!-- Tech Theme Card -->
  <article class="card card--tech">
    <div class="card__avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>

    </div>

    <div class="card__content">
      <h2 class="card__title">Frontend Dev</h2>
      <p class="card__tag">Tech Stack</p>
      <p class="card__text">Specialized in building high-performance, organized, and highly scalable interfaces using modern CSS architecture.</p>

    </div>

  </article>

  <!-- Creative Theme Card -->
  <article class="card card--creative">
    <div class="card__avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>

    </div>

    <div class="card__content">
      <h2 class="card__title">UI/UX Designer</h2>
      <p class="card__tag">Creative Mind</p>
      <p class="card__text">Focused on turning complex problems into simple, intuitive, and aesthetically flawless visual experiences.</p>

    </div>

  </article>

  <!-- Finance Theme Card -->
  <article class="card card--finance">
    <div class="card__avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>

    </div>

    <div class="card__content">
      <h2 class="card__title">Data Analyst</h2>
      <p class="card__tag">Finance & Data</p>
      <p class="card__text">Transforming large volumes of raw data into strategic visual dashboards that drive the future of the business.</p>

    </div>

  </article>

</main>

        `

      }

    },
    {
      "styles.scss": {
        type: "scss",
        code: `
// ==========================================
// 1. MODULE IMPORTS
// ==========================================
@use "sass:map";

// ==========================================
// 2. CONFIGURATION & VARIABLES (Maps)
// ==========================================
$breakpoints: (
  "mobile": 480px,
  "tablet": 768px,
  "desktop": 1024px

);

$themes: (
  "tech": (
    "primary": #00f2fe,
    "accent": #4facfe,
    "bg": #111827

  ),
  "creative": (
    "primary": #ff007f,
    "accent": #7928ca,
    "bg": #1f1135

  ),
  "finance": (
    "primary": #00b4db,
    "accent": #0083b0,
    "bg": #0b1e2d

  )

);

// ==========================================
// 3. MIXINS (Reusable Functions)
// ==========================================
// Mixin to manage responsiveness cleanly
@mixin respond-to($breakpoint) {
  @if map.has-key($breakpoints, $breakpoint) {
    @media (min-width: map.get($breakpoints, $breakpoint)) {
      @content;

    }

  }
  @else {
    @warn "The breakpoint '#{$breakpoint}' does not exist.";

  }

}

// Mixin to quickly generate linear gradients
@mixin linear-gradient($direction, $color1, $color2) {
  background: linear-gradient($direction, $color1, $color2);

}

// ==========================================
// 4. BASE STYLES & NESTING
// ==========================================
:host {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  margin: 0;

}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;

  // Media Query via Mixin
  @include respond-to("tablet") {
    flex-direction: row;

  }

}

.card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  flex: 1;
  border-bottom: 4px solid transparent; // Smooth layout reservation for hover state

  // Hover state referencing the parent seletor (&)
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);

  }

  // BEM Element: Avatar container block
  &__avatar {
    height: 120px;
    position: relative;

    // Target the embedded SVG inline tag
    svg {
      position: absolute;
      bottom: -30px;
      left: 24px;
      width: 60px;
      height: 60px;
      padding: 10px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      background-color: #e5e7eb;
      box-sizing: border-box;
      z-index: 2;
      transition: color 0.3s ease;

    }

  }

  // BEM Element: Content container block
  &__content {
    padding: 45px 24px 24px;

  }

  &__title {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 0.25rem;
    margin-top: 0;

  }

  &__tag {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    margin-top: 0;

  }

  &__text {
    color: #4b5563;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;

  }

  // ==========================================
  // 5. AUTOMATION WITH LOOPS (@each)
  // ==========================================
  // Dynamically loops through maps to construct modifiers (.card--tech, etc.)
  @each $name, $colors in $themes {
    &--#{$name} {
      .card__avatar {
        @include linear-gradient(
          135deg,
          map.get($colors, "primary"),
          map.get($colors, "accent")

        );

        svg {
          color: #9ca3af; // Muted fallback color for the profile icon

        }

      }

      .card__tag {
        color: map.get($colors, "accent");

      }

      &:hover {
        border-bottom-color: map.get($colors, "primary");

        // Changes the SVG path color to match the theme color on card hover
        .card__avatar svg {
          color: map.get($colors, "accent");

        }

      }

    }

  }

}

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-sass/output-sass").then((m) => m.OutputSass)

};

export const codeSnippetOutputTailwindcss: CodeSnippetModel = {
  tabs: [ "index.html", "styles.css", "output" ],
  codes: [
    {
      "index.html": {
        type: "html",
        code: `
<div class="terminal">

  <div class="terminal__bar">
    <span class="terminal__dot bg-[#ff5f57]"></span>
    <span class="terminal__dot bg-[#febc2e]"></span>
    <span class="terminal__dot bg-[#28c840]"></span>
  </div>

  <div class="terminal__body">

    <div class="line">
      <span class="prompt">$</span>

      <span
        class="type neon-green"
        style="
          --delay:300ms;
          --dur:1000ms;
          --n:20;
          --chars:20ch;
        ">
        echo 'hello, world'
      </span>
    </div>

    <div class="line output">
      <span
        class="reveal"
        style="--delay:1450ms">
        hello, world
      </span>
    </div>

  </div>

</div>
        `

      }

    },
    {
      "styles.css": {
        type: "css",
        code: `
@import "tailwindcss";

/* =====================================================
   Theme Configuration (Tailwind v4)
===================================================== */
@theme {
  --color-brand-bg: #0d1117;
  --color-brand-terminal: #161b22;
  --color-brand-bar: #11161d;
  --color-brand-border: #30363d;
  --color-brand-green: #00ff88;
  --color-brand-text: #e6edf3;
  --color-brand-muted: #c9d1d9;

  --font-mono: "JetBrains Mono", monospace;

  /* Registering Keyframes natively within the theme */
  @keyframes typing {
    from { width: 0; }
    to { width: var(--chars); }
  }
  @keyframes appear {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes blink {
    50% { border-color: transparent; }

  }

}

/* Custom utilities combining animations to prevent property overriding */
@utility anim-terminal-typewriter {
  animation: appear var(--dur) steps(var(--n), end) var(--delay) forwards,
    typing var(--dur) steps(var(--n), end) var(--delay) forwards,
    blink .7s step-end calc(var(--delay) + var(--dur)) infinite;

}

@utility anim-terminal-reveal {
  animation: appear 0ms linear var(--delay) forwards;

}

/* =====================================================
   Base & Layout
===================================================== */
:host {
  @apply min-h-screen grid place-items-center bg-brand-bg font-mono;

}

/* =====================================================
   Terminal Component
===================================================== */
.terminal {
  @apply w-[min(640px,90vw)] bg-brand-terminal border border-brand-border rounded-[14px] overflow-hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 24px 64px rgba(0, 0, 0, 0.55);

}

.terminal__bar {
  @apply flex items-center gap-2 h-[42px] px-4 bg-brand-bar border-b border-brand-border;

}

.terminal__dot {
  @apply w-3 h-3 rounded-full;

}

.terminal__body {
  @apply p-6;

}

/* =====================================================
   Text & Lines
===================================================== */
.line {
  @apply flex items-center gap-3 leading-[1.8];

}

.prompt {
  @apply text-brand-green font-bold;

}

.output {
  @apply pl-[1.45rem] text-brand-text;

}

.neon-green {
  @apply text-brand-green;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.45);

}

/* =====================================================
   Typewriter & Applied Animations
===================================================== */
.type {
  /* Applies the unified utility that handles the 3 animations without conflicts */
  @apply inline-block overflow-hidden whitespace-nowrap w-0 opacity-0 border-r-2 border-brand-green
         anim-terminal-typewriter;

}

.reveal {
  @apply opacity-0 anim-terminal-reveal;

}

/* =====================================================
   Accessibility (Reduced Motion)
===================================================== */
@media (prefers-reduced-motion: reduce) {
  .type,
  .reveal {
    @apply opacity-100 w-auto border-none animate-none;

  }

}
        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-tailwindcss/output-tailwindcss").then((m) => m.OutputTailwindcss)

};

export const codeSnippetOutputAngular: CodeSnippetModel = {
  tabs: [ "reactive-input.ts", "output" ],
  codes: [
    {
      "reactive-input.ts": {
        type: "ts",
        code: `
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  template: \`
    <p>What's your favorite food?</p>
    <label for="favoriteFood">
      <input id="favoriteFood" type="text"
        [ngModel]="favoriteFood()"
        (ngModelChange)="favoriteFood.set($event)"
        placeholder="enter here"

    />
    </label>
    <p>I like {{ favoriteFood() }}</p>
  \`,
  imports: [FormsModule],
})
export class ReactiveInput {
  favoriteFood = signal("");

}

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-angular/output-angular").then((m) => m.OutputAngular)

};

export const codeSnippetOutputNodeJS: CodeSnippetModel = {
  tabs: [ "server.js", "output" ],
  codes: [
    {
      "server.js": {
        type: "js",
        code: `
import express from "express";

const app = express();

const PORT = 3000;



app.get("/", (req, res) => {

  res.send(\`

    <!DOCTYPE html>

    <html lang="en">

    <head>

      <meta charset="UTF-8">

      <title>Express</title>

    </head>

    <body>

      <h1>Hello, World!</h1>

      <p>This page was sent via Express.</p>

    </body>

    </html>

  \`);

});

app.listen(PORT, () => {

  console.log(\`Servidor rodando em http://localhost:\${PORT}\`);

});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-nodejs/output-nodejs").then((m) => m.OutputNodejs)

};

export const codeSnippetOutputBun: CodeSnippetModel = {
  tabs: [ "server.js", "output" ],
  codes: [
    {
      "server.js": {
        type: "js",
        code: `
Bun.serve({
  port: 3000,

  fetch(req) {
    return new Response(
      \`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Bun</title>

      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>This page was sent via Bun.</p>

      </body>
      </html>
      \`,
      {
        headers: {
          "Content-Type": "text/html"

        }

      }

    );

  }

});

console.log("Servidor rodando em http://localhost:3000");

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-bun/output-bun").then((m) => m.OutputBun)

};

export const codeSnippetOutputPostgreSQL: CodeSnippetModel = {
  tabs: [ "db.sql", "output" ],
  codes: [
    {
      "db.sql": {
        type: "sql",
        code: `
-- Create a table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT
);

-- Insert data
INSERT INTO users (name, age)
VALUES
    ('Ryan', 22),
    ('Mary', 25),
    ('John', 30);

-- Retrieve all users
SELECT * FROM users;

-- Retrieve users older than 25
SELECT name, age
FROM users
WHERE age > 25;

-- Update a record
UPDATE users
SET age = 23
WHERE name = 'Ryan';

-- Delete a record
DELETE FROM users
WHERE name = 'John';

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-postgresql/output-postgresql").then((m) => m.OutputPostgresql)

};

export const codeSnippetOutputMongoDB: CodeSnippetModel = {
  tabs: [ "server.js", "output" ],
  codes: [
    {
      "server.js": {
        type: "js",
        code: `
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

// Connect to MongoDB
await mongoose.connect("mongodb://localhost:27017/library");

// Book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  publishedYear: Number,
});

// Book model
const Book = mongoose.model("Book", bookSchema);

// Create a book
app.post("/books", async (req, res) => {
  const book = await Book.create({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
  });

  res.status(201).json(book);
});

// Retrieve all books
app.get("/books", async (req, res) => {
  const books = await Book.find();

  res.json(books);
});

// Retrieve a specific book
app.get("/books/:title", async (req, res) => {
  const book = await Book.findOne({
    title: req.params.title,
  });

  if (!book) {
    return res.status(404).json({
      message: "Book not found.",
    });
  }

  res.json(book);
});

// Update a book
app.put("/books/:title", async (req, res) => {
  const book = await Book.findOneAndUpdate(
    { title: req.params.title },
    {
      publishedYear: 1951,
    },
    {
      new: true,
    }
  );

  res.json(book);
});

// Delete a book
app.delete("/books/:title", async (req, res) => {
  await Book.deleteOne({
    title: req.params.title,
  });

  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-mongodb/output-mongodb").then((m) => m.OutputMongodb)

};

export const codeSnippetOutputRedis: CodeSnippetModel = {
  tabs: [ "server.js", "output" ],
  codes: [
    {
      "server.js": {
        type: "js",
        code: `
import express from "express";
import { createClient } from "redis";

const app = express();

app.use(express.json());

// Connect to Redis
const redis = createClient();

redis.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

await redis.connect();

// Create a session
app.post("/sessions", async (req, res) => {
  await redis.hSet("session:1001", {
    username: "Ryan",
    theme: "dark",
    language: "en",
  });

  res.status(201).json({
    message: "Session created.",
  });
});

// Retrieve a session
app.get("/sessions/:id", async (req, res) => {
  const session = await redis.hGetAll(\`session:\${req.params.id}\`);

  if (Object.keys(session).length === 0) {
    return res.status(404).json({
      message: "Session not found.",
    });
  }

  res.json(session);
});

// Update a session
app.put("/sessions/:id", async (req, res) => {
  await redis.hSet(\`session:\${req.params.id}\`, {
    theme: "light",
  });

  res.json({
    message: "Session updated.",
  });
});

// Delete a session
app.delete("/sessions/:id", async (req, res) => {
  await redis.del(\`session:\${req.params.id}\`);

  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-redis/output-redis").then((m) => m.OutputRedis)

};

export const codeSnippetOutputVite: CodeSnippetModel = {
  tabs: [ "index.html", "styles.css", "main.js", "output" ],
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
  <title>Vite Hello World</title>
  <script type="module" src="/main.js"></script>
</head>
<body>
  <h1>Hello, Vite!</h1>

  <button id="counter">
    Count: 0

  </button>

</body>
</html>

        `

      }

    },
    {
      "styles.css": {
        type: "css",
        code: `
body {
  background: #f5f5f5;
  color: black;
  display: block;
  height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;

}

button {
  background-color: #cccccc;
  color: black;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 1px solid black;
  cursor: pointer;

}
        `

      }

    },
    {
      "main.js": {
        type: "js",
        code: `
import "./style.css";

const button = document.querySelector("#counter");

let count = 0;

button.addEventListener("click", () => {
  count++;
  button.textContent = \`Count: \${count}\`;

});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-vite/output-vite").then((m) => m.OutputVite)

};

export const codeSnippetOutputJest: CodeSnippetModel = {
  tabs: [ "cart.js", "cart.test.js", "output" ],
  codes: [
    {
      "cart.js": {
        type: "js",
        code: `
export function calculateTotal(items) {
  if (!items || items.length === 0) throw new Error("The cart is empty");
  return items.reduce((total, item) => total + item.price * item.qty, 0);

}
        `

      }

    },
    {
      "cart.test.js": {
        type: "js",
        code: `
import { test, expect } from '@jest/globals';
import { calculateTotal } from './cart.js';

test('Success: Should calculate the cart total correctly', () => {
  const items = [{ price: 10, qty: 2 }, { price: 50, qty: 1 }];
  expect(calculateTotal(items)).toBe(70);

});

test('Intentional Error: Should fail by expecting an incorrect value', () => {
  const items = [{ price: 10, qty: 2 }];
  // We expect 20, but we test for 99 to simulate a failing test
  expect(calculateTotal(items)).toBe(99);

});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-jest/output-jest").then((m) => m.OutputJest)

};

export const codeSnippetOutputVitest: CodeSnippetModel = {
  tabs: [ "api.js", "api.test.js", "output" ],
  codes: [
    {
      "api.js": {
        type: "js",
        code: `
export async function fetchUser(id) {
  if (id === 1) return { id: 1, name: 'Ana' };
  throw new Error('User not found');

}

        `

      }

    },
    {
      "api.test.js": {
        type: "js",
        code: `
import { test, expect } from 'vitest';
import { fetchUser } from './api.js';

test('Success: Should return the correct user data', async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({ id: 1, name: 'Ana' });

});

test('Intentional Error: Should fail because the Promise rejects', async () => {
  // Passing ID 2 triggers the exception, which makes this assertion fail
  await expect(fetchUser(2)).resolves.toEqual({ id: 1, name: 'Ana' });

});

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-vitest/output-vitest").then((m) => m.OutputVitest)

};

export const codeSnippetOutputDocker: CodeSnippetModel = {
  tabs: [ "app.js", "Dockerfile", "output" ],
  codes: [
    {
      "app.js": {
        type: "js",
        code: `
// A simple script that reads an environment variable or defaults to Guest
const user = process.env.APP_USER || 'Guest';
console.log(\`Hello, \${user}! Docker container executed successfully.\`);

        `

      }

    },
    {
      "Dockerfile": {
        type: "Dockerfile",
        code: `
# Use the official lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the local script into the container
COPY app.js .

# Command to run the application
CMD ["node", "app.js"]

        `

      }

    }

  ],
  render: async () => import("../../features/shared/output-docker/output-docker").then((m) => m.OutputDocker)

};
