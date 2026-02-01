import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSpinner } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule, MatSpinner],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  isLoading: boolean = false;
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;
  
  
  calcularResultado(){
    this.isLoading = true;
    this.resultado = null;
    
    // Simula um processamento assíncrono antes de exibir o resultado
    setTimeout(() => {
      this.resultado = this.numero1 + this.numero2;
    
      this.isLoading = false;
    }, 1000);
  }
}
