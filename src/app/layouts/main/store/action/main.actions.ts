import {createAction, props} from '@ngrx/store';
import {Product} from "../../pages/products/models/product.model";

export const addToCard = createAction(
  '[Main] Add To Card',
  props<{ product: any }>()

);

export const setCartData = createAction(
  '[Main] Set cart data',
  props<{ data: Product[] }>()
);

export const getCartData = createAction(
  '[Main] Get cart data',
);

export const confirmCheckout = createAction(
  '[Main] confirm checkout',
);

export const clearCart = createAction(
  '[Main] Clear cart',
);
