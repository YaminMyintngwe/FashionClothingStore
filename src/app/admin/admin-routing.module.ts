import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductComponent } from "./components/product/product.component";
import { ManageProductComponent } from "./components/manage-product/manage-product.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ManageBlogComponent } from "./components/manage-blog/manage-blog.component";
import { UserComponent } from "./components/user/user.component";
import { ManageUserComponent } from "./components/manage-user/manage-user.component";
import { RoleComponent } from "./components/role/role.component";
import { ManageRoleComponent } from "./components/manage-role/manage-role.component";
import { GeneralSettingComponent } from "./components/general-setting/general-setting.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', component: ManageProductComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: ManageBlogComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/:id', component: ManageUserComponent},
    {path: 'role', component: RoleComponent},
    {path: 'role/:id', component: ManageRoleComponent},
    {path: 'general-setting', component: GeneralSettingComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}