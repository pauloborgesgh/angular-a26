import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
export const routes: Routes = [
    { path: 'lista', component: ListaComponent },
    { path: 'calculadora', component: CalculadoraComponent },
];
