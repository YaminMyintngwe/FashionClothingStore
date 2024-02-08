import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderCompleteComponent } from './components/order-complete/order-complete.component';
import { APP_IMPORTS } from '../app.import';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ClientComponent,
        HomeComponent,
        ShopComponent,
        BlogComponent,
        AboutComponent,
        ContactComponent,
        ShoppingCartComponent,
        CheckoutComponent,
        OrderCompleteComponent,
    ],
    imports: [
        SharedModule,
        ClientRoutingModule,
        APP_IMPORTS
    ]
})
export class ClientModule { }
