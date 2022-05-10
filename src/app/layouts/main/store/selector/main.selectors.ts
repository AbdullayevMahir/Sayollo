import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState} from "../reducer/main.reducer";
import {Product} from "../../pages/products/models/product.model";


export const selectProductsFeature = createFeatureSelector<any>(
  "main",
);

export const selectProductsInCartFeature = createFeatureSelector<any>(
  "main",
);

export const selectAllProducts = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.products
)

export const selectAllProductsInCart = createSelector(
  selectProductsInCartFeature,
  (state: ProductsState) => state.productsInCart
)

export const selectProductsInCartCount = createSelector(
  selectProductsInCartFeature,
  (state: ProductsState) => {
    let count = 0;
    state.productsInCart.forEach((product) => count += product.qty);
    return count;
  }
)

export const selectTotalPriceOfOrder = createSelector(
  selectProductsInCartFeature,
  (state: ProductsState) => {
    let sum = 0;
    state.productsInCart.forEach((product: Product) => sum += product.price * product.qty);
    return sum;
  }
)
