import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectTotalPriceOfOrder} from "../../../../store/selector/main.selectors";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {USER_DATA_KEY} from "../../../../../../core/constants";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totalPrice$;
  submitted = false;
  checkoutForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder, private router: Router) {
    this.totalPrice$ = this.store.pipe(select(selectTotalPriceOfOrder));
    this.checkoutForm = this.fb.group({
      email: [localStorage.getItem('email'), [Validators.required, Validators.email]],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      card: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
    this.getPersistedCheckoutData();
  }

  submit() {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(this.checkoutForm.value))
      this.router.navigateByUrl('/main/checkout/confirm')
    }
  }

  private getPersistedCheckoutData() {
    const userCheckoutData = localStorage.getItem(USER_DATA_KEY);
    if (userCheckoutData) {
      const formData = JSON.parse(userCheckoutData);
      this.checkoutForm.patchValue(formData);
    }
  }
}
