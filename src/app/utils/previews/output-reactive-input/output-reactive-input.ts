import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, inject, input, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-output-reactive-input',
  imports: [
    CommonModule

  ],
  templateUrl: './output-reactive-input.html',
  styleUrl: './output-reactive-input.scss'
})
export class OutputReactiveInput {
  public html = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  public sanitizedHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.html()));

  private container = viewChild<ElementRef<HTMLDivElement>>("container");

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const element = this.container();

    if (target.tagName !== "INPUT" || !element) return;

    const p = element.nativeElement.querySelector("p");
    const value = target.value;

    if (p) p.textContent = `    Eu gosto de ${value}`;

  }

}
