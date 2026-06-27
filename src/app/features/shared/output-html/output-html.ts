import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-html',
  imports: [],
  templateUrl: './output-html.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"20px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputHtml {
}
