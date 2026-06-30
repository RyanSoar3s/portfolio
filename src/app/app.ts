import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, AfterViewInit, OnDestroy, viewChildren, signal, inject } from '@angular/core';
import { AboutMe } from '@components/about-me/about-me';
import { Contacts } from '@components/contacts/contacts';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Home } from '@components/home/home';
import { Projects } from '@components/projects/projects';
import { Tech } from '@components/tech/tech';
@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home,
    AboutMe,
    Tech,
    Projects,
    Contacts,
    Footer

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '[style.overflow-x]': '"clip"'

  }
})
export class App implements AfterViewInit, OnDestroy {
  private viewportScroll = inject(ViewportScroller);

  private childs = viewChildren("childs", { read: ElementRef<HTMLElement> });
  private observer: IntersectionObserver | null = null;
  protected readonly visibleComponents = signal<Record<string, boolean>>({
    home: false,
    aboutMe: false,
    tech: false,
    projects: false,
    contacts: false

  });

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement;
        const label = target.getAttribute("aria-label");

        if (!label) return;

        switch (label) {
          case "home":
            this.updateVisibleComponents("home");
            break;

          case "about-me":
            this.updateVisibleComponents("aboutMe");
            break;

          case "tech":
            this.updateVisibleComponents("tech");
            break;

          case "projects":
            this.updateVisibleComponents("projects");
            break;

          case "contacts":
            this.updateVisibleComponents("contacts");
            break;

          default:
            break;
        }

      })

    },
    {
      threshold: 0.4

    });

    this.childs().forEach((child) => this.observer?.observe(child.nativeElement));

  }

  protected scrollNavigation(index: number): void {
    const childs = this.childs()[index].nativeElement;

    this.viewportScroll.scrollToPosition([ 0, childs.offsetTop - 100 ]);

  }

  private updateVisibleComponents(component: string): void {
    this.visibleComponents.update((cmps) => ({
      ...cmps,
      [component]: true

    }))

  }

  ngOnDestroy(): void {
    if (this.observer) this.observer = null;

  }

}
