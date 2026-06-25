import { Component, ElementRef, AfterViewInit, OnDestroy, viewChildren, signal } from '@angular/core';
import { AboutMe } from '@components/about-me/about-me';
import { Header } from '@components/header/header';
import { Home } from '@components/home/home';
@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home,
    AboutMe

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '[style.overflow-x]': '"clip"'

  }
})
export class App implements AfterViewInit, OnDestroy {
  private childs = viewChildren("childs", { read: ElementRef<HTMLElement> });
  private observer: IntersectionObserver | null = null;
  protected readonly visibleComponents = signal<Record<string, boolean>>({
    home: false,
    aboutMe: false

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
