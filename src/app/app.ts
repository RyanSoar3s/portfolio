import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, AfterViewInit, OnDestroy, viewChildren, inject, effect, signal } from '@angular/core';
import { AboutMe } from '@components/about-me/about-me';
import { Contacts } from '@components/contacts/contacts';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Home } from '@components/home/home';
import { Projects } from '@components/projects/projects';
import { Tech } from '@components/tech/tech';
import { ComponentsLabel } from '@models/components-label';
import { StateComponents } from '@services/state-components';

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
  private stateComponents = inject(StateComponents);

  private childs = viewChildren("childs", { read: ElementRef<HTMLElement> });
  private element = signal<HTMLElement | null>(null);
  private observer: IntersectionObserver | null = null;

  constructor() {
    effect(() => {
      const element = this.element();

      if (!element) return;

      const label = element.getAttribute("aria-label");

      if (!label) return;

      const visibleComponents = this.stateComponents.visibleComponents();

      if (!visibleComponents[label as ComponentsLabel].isActive) return;

      this.viewportScroll.scrollToPosition([ 0, element.offsetTop - 100 ]);
      this.element.set(null);

    });

  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement;
        const label = target.getAttribute("aria-label");

        if (!label) return;

        this.stateComponents.updateState(label as ComponentsLabel, "isTarget");

      });

    },
    {
      threshold: 0.4
    });

    this.childs().forEach((child) => this.observer?.observe(child.nativeElement));

  }

  protected activeComponents(index: number): void {
    const keys = Object.keys(this.stateComponents.visibleComponents());

    keys
      .slice(0, index + 1)
      .forEach((k) => this.stateComponents.updateState(k as ComponentsLabel, "isTarget"));

    this.element.set(this.childs()[index].nativeElement as HTMLElement);

  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;

    }

  }

}
