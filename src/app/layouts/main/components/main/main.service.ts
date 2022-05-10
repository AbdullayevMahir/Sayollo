import {Injectable} from "@angular/core";
import {of} from "rxjs";
import { CART_RPODUCTS_KEY, USER_DATA_KEY} from "../../../../core/constants";

@Injectable()
export class MainService {
  constructor() {

  }

  getCartData() {
    const checkoutData = localStorage.getItem('basketData');
    if (checkoutData) return of(JSON.parse(checkoutData));
    return of([]);
  }

  confirmCheckout() {
    localStorage.removeItem(CART_RPODUCTS_KEY);
    return of('success');
  }
  getUserCheckoutData() {
    const userCheckoutData = localStorage.getItem(USER_DATA_KEY);
    if(userCheckoutData) return of(JSON.parse(userCheckoutData));
    return of(null);
  }
}
