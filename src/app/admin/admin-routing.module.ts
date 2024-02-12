import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductComponent } from "./components/product/product.component";
import { BlogComponent } from "./components/blog/blog.component";
import { UserComponent } from "./components/user/user.component";
import { GeneralSettingComponent } from "./components/general-setting/general-setting.component";
import { ManageProductComponent } from "./components/manage-product/manage-product.component";
import { ManageBlogComponent } from "./components/manage-blog/manage-blog.component";
import { ManageUserComponent } from "./components/manage-user/manage-user.component";


const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'product', component: ProductComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'user', component: UserComponent},
    {path: 'general-setting', component: GeneralSettingComponent},
    {path: 'manage-product', component: ManageProductComponent},
    {path: 'manage-blog', component: ManageBlogComponent},
    {path: 'manage-user', component: ManageUserComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}