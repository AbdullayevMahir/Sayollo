import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
  orderNumber = Math.floor((Math.random() * 100000000) + 1)
  constructor() { }

  ngOnInit(): void {
  }

}
