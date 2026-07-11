import { Directive, inject, effect, input, untracked } from '@angular/core';
import { ComponentsLabel } from '@models/components-label';
import { StateComponents } from '@services/state-components';

@Directive({
  selector: '[appActiveElement]',
})
export class ActiveElement {
  private stateComponent = inject(StateComponents);

  appActiveElement = input.required<ComponentsLabel>();

  constructor() {
    effect(() => {
      const name = this.appActiveElement();
      untracked(() => this.stateComponent.updateState(name, "isActive"));

    });

  }

}
