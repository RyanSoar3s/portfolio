import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-nodejs',
  imports: [],
  templateUrl: './output-nodejs.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"20px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputNodejs {

}
