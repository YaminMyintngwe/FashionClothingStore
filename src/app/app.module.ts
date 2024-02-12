import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_IMPORTS } from './app.import';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { IndividualLayoutComponent } from './layouts/individual-layout/individual-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
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
        BrowserAnimationsModule
    ]
})
export class AppModule { }
