import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-vitest',
  imports: [],
  templateUrl: './output-vitest.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.height]': '"393px"',
    '[style.overflow]': '"auto"',
    '[style.scrollbar-width]': '"none"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputVitest {

}
