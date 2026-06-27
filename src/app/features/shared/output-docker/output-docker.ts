import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-docker',
  imports: [],
  templateUrl: './output-docker.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.height]': '"393px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputDocker {

}
