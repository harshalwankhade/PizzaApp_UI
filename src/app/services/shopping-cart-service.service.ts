import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FoodItems } from '../models/FoodItems';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartServiceService {
  Products: FoodItems[] = [];
  private foodItemsState$: BehaviorSubject<FoodItems[]> =
    new BehaviorSubject<FoodItems[]>([]);

  constructor() {
    this.foodItemsState$.subscribe((_) => (this.Products = _));
  }

  AddToCart(_product: FoodItems) {
    this.foodItemsState$.next([...this.Products, _product]);
  }

  RemoveFromCart(name: string) {
    this.Products = this.Products.filter((_item) => _item.name !== name);
    this.foodItemsState$.next(this.Products);
  }

  GetAllCartItems(): Observable<FoodItems[]> {
    console.log(`GetAllCartItems Length ${this.foodItemsState$.value.length}`)
    return this.foodItemsState$;
  }

  ClearCart() {
    this.foodItemsState$.next([]);
    //return this.foodItemsState$;
  }
}
