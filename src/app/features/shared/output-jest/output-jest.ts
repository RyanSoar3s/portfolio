import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-jest',
  imports: [],
  templateUrl: './output-jest.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.height]': '"393px"',
    '[style.overflow]': '"auto"',
    '[style.scrollbar-width]': '"none"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputJest {

}
