import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title: String = 'Sklep internetowy';

  list: String[] = ['Strona głowna', 'O nas', 'Oferta', 'Kontakt'];
}
