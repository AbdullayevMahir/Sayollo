import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {
  constructor() {
  }

  setBasketData(basketData: any) {
    localStorage.setItem('basketData', JSON.stringify(basketData));
  };
}
