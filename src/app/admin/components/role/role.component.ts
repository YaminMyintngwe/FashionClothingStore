import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { ROLE_TABLE_COLUMNS } from '../../constants/role-table.column';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  roleTableColumns : TableColumn[] = ROLE_TABLE_COLUMNS;
  constructor(private router : Router) {}

  addRole(id : number) {
    this.router.navigateByUrl(`/admin/role/${id}`);
  }
}
