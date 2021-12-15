import { Component } from '@angular/core';
import { ShoppingCartServiceService } from "../app/services/shopping-cart-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeriaui';
  cartItemsCount: number = 0;

  constructor(private _shoppingCartService: ShoppingCartServiceService) {}

  ngOnInit(){
    this._shoppingCartService.GetAllCartItems().subscribe(
      val=> this.cartItemsCount=val.length
    );
    //console.log('this.cartItemsCount -'+this.cartItemsCount)
  }
}
