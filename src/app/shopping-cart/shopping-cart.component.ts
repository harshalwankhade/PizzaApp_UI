import { FoodItems } from './../models/FoodItems';
import { ShoppingCartServiceService } from './../services/shopping-cart-service.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems :any;
  durationInSeconds = 5;


  constructor(private _shoppingCartServiceService: ShoppingCartServiceService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //console.log('this._shoppingCartServiceService.GetAllCartItems() '+this._shoppingCartServiceService.GetAllCartItems().)
    //console.log('before cartItems-'+this.cartItems)
    this._shoppingCartServiceService.GetAllCartItems().subscribe(
      val=> this.cartItems=val
    );
    //console.log('after cartItems-'+this.cartItems)
  }

  RemoveFromCart(item: FoodItems){
    this._shoppingCartServiceService.RemoveFromCart(item.name);
  }

  EmptyCart(){
    this.cartItems=[];
    this._shoppingCartServiceService.ClearCart();
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
  <span class="example-pizza-party">
    😐 Shopping Cart Cleared !!!
  </span>
  `,
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}
