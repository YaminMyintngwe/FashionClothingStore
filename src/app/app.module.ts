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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        IndividualLayoutComponent,
        AdminLayoutComponent
    ],
    providers: [
        DatePipe
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        provideFirebaseApp(() => initializeApp({"projectId":"fashion-clothing-store-ea57d","appId":"1:161783106998:web:17a4a55b3ea83234674517","storageBucket":"fashion-clothing-store-ea57d.appspot.com","apiKey":"AIzaSyBjXhdTe6a4TIyZMXfMXk3KgGC8TD37hq0","authDomain":"fashion-clothing-store-ea57d.firebaseapp.com","messagingSenderId":"161783106998"})),
        provideFirestore(() => getFirestore())
    ]
})
export class AppModule { }
