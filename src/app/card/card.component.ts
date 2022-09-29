import { Component, OnInit } from '@angular/core';
import { CardItemsService } from '../services/card-items.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  ja:boolean = false;

  products: any; 
  add: number = 0;
  constructor(service: CardItemsService) {
    this.products = service.getItems();
  }
  addToTheCart() {
    console.log('In event..');
    console.log(event);
    this.products.id == event ? this.products.quantity ++ : console.log('Error ..');
    
  }
  removeFromCart() {
    (this.add > 0) ?  this.add = this.add - 1: this.add =0;
  }
}
