import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() id = 1;
  @Input() imageUrl = ''
  @Input() name = ''
  @Input() text = ''
  @Input() price = 40;
  @Input() qty = 1
  @Output() onAddToBasket = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  increaseCount() {
    this.qty ++;
  }

  decreaseCount() {
    if(this.qty > 1) this.qty --;
  }

  addToBasket() {
    this.onAddToBasket.emit({product: {id: this.id, qty: this.qty, price: this.price}});
  }
}
