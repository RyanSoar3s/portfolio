import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, viewChildren } from '@angular/core';
import { AboutMe } from '@features/about-me/about-me';
import { Contacts } from '@features/contacts/contacts';
import { Footer } from '@features/footer/footer';
import { Header } from '@features/header/header';
import { Home } from '@features/home/home';
import { Projects } from '@features/projects/projects';
import { Technologies } from '@features/technologies/technologies';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home,
    AboutMe,
    Technologies,
    Projects,
    Contacts,
    Footer

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private sections = viewChildren<string, ElementRef<HTMLElement>>("section", { read: ElementRef<HTMLElement> });
  private viewportScroll = inject(ViewportScroller);

  ngAfterViewInit(): void {
    const section = this.sections()[0].nativeElement;
    this.viewportScroll.scrollToPosition([ 0, section.offsetTop - 170 ]);

  }

  protected scrollNavigation(index: number): void {
    const section = this.sections()[index].nativeElement;

    this.viewportScroll.scrollToPosition([ 0, section.offsetTop - 120 ]);


  }

  @HostListener("window:resize")
  resetScroll(): void {
    const section = this.sections()[0].nativeElement;
    this.viewportScroll.scrollToPosition([ 0, section.offsetTop - 170 ]);

  }

}
