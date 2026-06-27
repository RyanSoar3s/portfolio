import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-mongodb',
  imports: [],
  templateUrl: './output-mongodb.html',
  styles: '',
  host: {
    '[style.display]': '"block"',
    '[style.padding]': '"10px"'

  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputMongodb {
  response = JSON.stringify(
    [
      {
        "_id": "684e7b11d8d2d41c9c8d4c90",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publishedYear": 1937,
        "__v": 0

      }

    ],
    null,
    2

  );

}
