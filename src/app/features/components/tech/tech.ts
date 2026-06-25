import { Component, inject, input, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Responsive } from '@services/responsive';

@Component({
  selector: 'app-tech',
  imports: [
    TranslocoModule

  ],
  templateUrl: './tech.html',
  styleUrl: './tech.scss'
})
export class Tech {
  protected readonly responsive = inject(Responsive);
  protected readonly transloco = inject(TranslocoService);

  animate = input.required<boolean>();

  protected selectedTech = signal<string | undefined>(undefined);

  selectTech(tech: string): void {
    this.selectedTech.set((!this.selectedTech() || this.selectedTech() !== tech) ? tech : undefined);

  }

}
