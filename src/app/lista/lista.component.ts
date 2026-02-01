import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  newItem: string = '';
  errorMessage: string = '';
  items: ItemLista[] = [];
  nextId: number = 1;

  addItem() {
    const itemlista: ItemLista = {
      id: this.nextId++,
      nome: this.newItem,
      completado: false
    };
    if(itemlista.nome?.trim() === ''){
      this.errorMessage = 'item da lista nao pode ser vazio';
      
      return;
    }
    this.items.push(itemlista);
    console.table(this.items);
    this.newItem = '';
  }
  

  toggleItem(index: number) {
    this.items = this.items.map((item, i) =>
      i === index ? { ...item, completado: !item.completado } : item
    );
  }
  clearItems() {
    this.items = [];
  }
}
