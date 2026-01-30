import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from './main/main.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaComponent } from './lista/lista.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,CalculadoraComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cbasico';
}
