import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
