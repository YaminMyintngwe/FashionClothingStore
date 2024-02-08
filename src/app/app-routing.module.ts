import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualLayoutComponent } from './layouts/individual-layout/individual-layout.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const APP_ROUTES: Routes = [
  {
    path: 'login', component: IndividualLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '', component: MainLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
