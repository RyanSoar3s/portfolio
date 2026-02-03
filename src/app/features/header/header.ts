import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, output, signal } from '@angular/core';
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

  public idSection = output<number>();

  toggleMenu(): void {
    this.isOpenMenu.update((value) => !value);

  }

  emit(id: number): void {
    this.idSection.emit(id);

  }

  @HostListener("window:resize")
  onResize(): void {
    if (this.isOpenMenu()) this.isOpenMenu.update(() => false);

  }

}
