import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-bun',
  imports: [],
  templateUrl: './output-bun.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"20px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputBun {

}
