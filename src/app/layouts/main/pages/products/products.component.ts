import {Component, OnInit} from '@angular/core';
import {selectAllProducts, selectAllProductsInCart} from "../../store/selector/main.selectors";
import {select, Store} from "@ngrx/store";
import {addToCard} from "../../store/action/main.actions";
import {ProductService} from "./product.service";
import {Product} from "./models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$;

  constructor(private store: Store, private productService: ProductService) {
    this.products$ = this.store.pipe(select(selectAllProducts));
  }

  ngOnInit(): void {
    this.persistCartData();
  }

  addToBasket(productData: any) {
    this.store.dispatch(addToCard(productData));
  }

  persistCartData() {
    this.store.pipe(select(selectAllProductsInCart)).subscribe((cartData: Product[]) => this.productService.setBasketData(cartData))
  }
}
