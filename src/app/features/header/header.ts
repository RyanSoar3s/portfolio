import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  protected readonly responsive = inject(Responsive);

  protected readonly faCode = faCode;
  protected readonly profileImage = "assets/images/profile.png";
  public isOpenMenu = signal(false);

  toggleMenu(): void {
    this.isOpenMenu.update((value) => !value);

  }

  @HostListener("window:resize")
  onResize(): void {
    if (this.isOpenMenu()) this.isOpenMenu.update(() => false);

  }

}
