import { Routes } from '@angular/router';
import { CalculadoraPage } from './calculadora/calculadora.page';

const routes: Routes = [

  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculadora', loadChildren: () => import('./calculadora/calculadora.page').then(m => m.CalculadoraPage) },
];
