import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_IMPORTS } from './app.import';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { IndividualLayoutComponent } from './layouts/individual-layout/individual-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MainLayoutComponent,
        IndividualLayoutComponent,
        AdminLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        APP_IMPORTS
    ]
})
export class AppModule { }
