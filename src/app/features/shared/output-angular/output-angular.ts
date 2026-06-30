import { Component, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-angular',
  imports: [
    FormsModule

  ],
  templateUrl: './output-angular.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"20px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputAngular {
  favoriteFood = signal("");

}
