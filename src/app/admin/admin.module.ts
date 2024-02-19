import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { GeneralSettingComponent } from './components/general-setting/general-setting.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageBlogComponent } from './components/manage-blog/manage-blog.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { RoleComponent } from './components/role/role.component';
import { ManageRoleComponent } from './components/manage-role/manage-role.component';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        BlogComponent,
        ProductComponent,
        UserComponent,
        GeneralSettingComponent,
        ManageProductComponent,
        ManageBlogComponent,
        ManageUserComponent,
        RoleComponent,
        ManageRoleComponent
    ],
    imports: [
        SharedModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
