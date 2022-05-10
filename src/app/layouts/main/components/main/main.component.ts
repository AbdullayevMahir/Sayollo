import { Component, OnInit } from '@angular/core';
import {MainService} from "./main.service";
import {Store} from "@ngrx/store";
import {getCartData, setCartData} from "../../store/action/main.actions";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service: MainService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getCartData())
    this.getUserCheckoutData();
  }
  getUserCheckoutData() {
    this.service.getUserCheckoutData().subscribe((data) => {
    });
  }
}
