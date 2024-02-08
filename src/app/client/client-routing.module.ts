import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ShopComponent } from "./components/shop/shop.component";
import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderCompleteComponent } from "./components/order-complete/order-complete.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'order-complete', component: OrderCompleteComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}