import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './footerHeader/header/header';
import { Footer } from './footerHeader/footer/footer';
import { Problemas } from './problemas/problemas';
import { Impacto } from './impacto/impacto';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, Header, Footer, Problemas, Impacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aquaria');
}
