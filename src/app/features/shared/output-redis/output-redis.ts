import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-redis',
  imports: [],
  templateUrl: './output-redis.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"10px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputRedis {
  response = JSON.stringify({
    "username": "Ryan",
    "theme": "dark",
    "language": "en"

  }, null, 2);

}
