import {Action, createReducer, on} from '@ngrx/store';
import {Product} from "../../pages/products/models/product.model";
import * as productActions from '../action/main.actions';
import {CheckoutUserDataModel} from "../../pages/checkout/models/checkoutUserData.model";

export const productFeatureKey = 'product';

export interface ProductsState {
  products: Product[],
  productsInCart: any[],
  userCheckoutData: CheckoutUserDataModel | null
}

export const initialState: ProductsState = {
  products: [
    {
      id: 1,
      image: 'https://random.imagecdn.app/640/480',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
      price: 40,
      qty: 0
    },
    {
      id: 2,
      image: 'https://random.imagecdn.app/960/480',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
      price: 90,
      qty: 0
    },
    {
      id: 3,
      image: 'https://random.imagecdn.app/1024/768',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
      price: 74,
      qty: 0
    }
  ],
  productsInCart: [],
  userCheckoutData: null
};

export const mainReducer = createReducer(
  initialState,
  on(productActions.addToCard, (state: any, {product}) => {
      let newCardItems = [...state.productsInCart]
      newCardItems.push(product);
      return {
        ...state,
        productsInCart: newCardItems
      };
    }
  ),
  on(productActions.setCartData, (state: any, {data}) => {
      return {
        ...state,
        productsInCart: data
      };
    }
  ),
  on(productActions.clearCart, (state: any) => {
      return {
        ...state,
        productsInCart: []
      };
    }
  )
);

export function reducer(state: ProductsState | undefined, action: Action): any {
  return mainReducer(state, action);
}
