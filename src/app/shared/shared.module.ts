import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { APP_IMPORTS } from "../app.import";
import { HttpClientModule } from "@angular/common/http";
import { DatatableComponent } from './components/datatable/datatable.component';
import { DateFormatter } from "./pipes/date-formatter.pipe";

@NgModule({
    declarations: [
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        DatatableComponent,
        DateFormatter
    ],
    imports: [
        APP_IMPORTS
    ],
    exports: [
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        DatatableComponent,
        APP_IMPORTS,
        HttpClientModule
    ]
})
export class SharedModule {}