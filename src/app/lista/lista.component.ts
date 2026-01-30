import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  newItem: string = '';

  items: string[] = [];
  addItem() {
    const texto = this.newItem?.trim();
    if (texto) {
      this.items = [...this.items, texto];
      this.newItem = '';
    }
  }
}
