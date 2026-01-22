import { Component } from '@angular/core';
import { Header } from '@features/header/header';
import { Home } from '@features/home/home';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
