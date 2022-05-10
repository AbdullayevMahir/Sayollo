import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {
  selectAllProductsInCart,
  selectProductsInCartCount
} from "../../store/selector/main.selectors";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() basketItemsCount = 0;
  productInCart$;
  constructor(private store: Store) {
    this.productInCart$ = this.store.pipe(select(selectProductsInCartCount));
  }
  ngOnInit(): void {
  }

}
