import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { APP_IMPORTS } from "../app.import";

@NgModule({
    declarations: [
        LoginComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        APP_IMPORTS
    ],
    exports: [
        LoginComponent,
        NavbarComponent,
        FooterComponent,
    ]
})
export class SharedModule {}