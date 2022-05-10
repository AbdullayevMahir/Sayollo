import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, of} from "rxjs";
import {clearCart, confirmCheckout, getCartData, setCartData} from "../action/main.actions";
import {MainService} from "../../components/main/main.service";



@Injectable()
export class MainEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCartData.type),
      mergeMap(() => this.service.getCartData()
        .pipe(
          map(data => {
            return setCartData({data})
          }),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  confirmCheckout = createEffect(() =>
    this.actions$.pipe(
      ofType(confirmCheckout.type),
      mergeMap(() => this.service.confirmCheckout()
        .pipe(
          map(_ => {
            return clearCart();
          }),
          catchError(() => of({ type: 'Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: MainService) {}

}
