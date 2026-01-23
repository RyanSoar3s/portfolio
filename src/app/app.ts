import { Component } from '@angular/core';
import { AboutMe } from '@features/about-me/about-me';
import { Contacts } from '@features/contacts/contacts';
import { Footer } from '@features/footer/footer';
import { Header } from '@features/header/header';
import { Home } from '@features/home/home';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home,
    AboutMe,
    Contacts,
    Footer

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
