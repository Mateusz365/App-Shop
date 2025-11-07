import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Oferta } from './oferta/oferta';
import { Kontakt } from './kontakt/kontakt';
import { Onas } from './onas/onas';

export const routes: Routes = [
  // 1. Ścieżka dla Strony Głównej
  { path: 'home', component: Home },
  { path: 'oferta', component: Oferta },
  { path: 'kontakt', component: Kontakt },
  { path: 'onas', component: Onas },
  // 3. Przekierowanie domyślne
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
