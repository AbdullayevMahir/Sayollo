import {Component, OnInit} from '@angular/core';
import {CheckoutUserDataModel} from "../../models/checkoutUserData.model";
import {select, Store} from "@ngrx/store";
import {selectTotalPriceOfOrder} from "../../../../store/selector/main.selectors";
import {Router} from "@angular/router";
import {confirmCheckout} from "../../../../store/action/main.actions";
import {CART_RPODUCTS_KEY, USER_DATA_KEY} from "../../../../../../core/constants";

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.scss']
})
export class CheckoutConfirmComponent implements OnInit {
  userFormData: CheckoutUserDataModel | null;
  products: any;
  totalPrice$;
  constructor(private store: Store, private router: Router) {
    const userData: any = localStorage.getItem(USER_DATA_KEY);
    this.totalPrice$ = this.store.pipe(select(selectTotalPriceOfOrder));
    this.userFormData = userData ? JSON.parse(userData) : null;
    this.products = localStorage.getItem(CART_RPODUCTS_KEY);
  }

  ngOnInit(): void {
  }

  submit() {
    this.store.dispatch(confirmCheckout());
    this.downloadPurchaseDetails();
    this.router.navigateByUrl('/main/checkout/success');
  }

  downloadPurchaseDetails() {
    const data = JSON.stringify({userData: JSON.stringify(this.userFormData), products: this.products});
    const blob = new Blob([data], { type: 'text/json' });
    const url= window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = "pruchase-history.json";
    link.click();
  }
}
