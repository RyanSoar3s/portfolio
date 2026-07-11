import { computed, Injectable, signal } from '@angular/core';
import { ComponentsLabel } from '@models/components-label';

@Injectable({
  providedIn: 'root'
})
export class StateComponents {
  private visibleComponentsSignal = signal<Record<ComponentsLabel, { isActive: boolean, isTarget: boolean }>>({
    "home": {
      isActive: false,
      isTarget: false

    },
    "about-me": {
      isActive: false,
      isTarget: false

    },
    "tech": {
      isActive: false,
      isTarget: false

    },
    "projects": {
      isActive: false,
      isTarget: false

    },
    "contacts": {
      isActive: false,
      isTarget: false

    }

  });

  readonly visibleComponents = computed(() => this.visibleComponentsSignal());

  updateState(componentName: ComponentsLabel, key: "isActive" | "isTarget"): void {
    this.visibleComponentsSignal.update((cmp) => ({
      ...cmp,
      [componentName]: {
        ...cmp[componentName],
        [key]: true

      }

    }));

  }

}
