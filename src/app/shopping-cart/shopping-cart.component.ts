import { FoodItems } from './../models/FoodItems';
import { ShoppingCartServiceService } from './../services/shopping-cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems :any;

  constructor(private _shoppingCartServiceService: ShoppingCartServiceService) { }

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

}
