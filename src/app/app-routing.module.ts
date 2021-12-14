import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SidesComponent } from './sides/sides.component';

const routes: Routes = [
  { path:'shoppingCart', component: ShoppingCartComponent},
  { path:'menu', component: MenuComponent},
  { path:'sides', component: SidesComponent},
  { path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
