import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { USER_TABLE_COLUMNS } from '../../constants/user-table.column';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userTableColumns : TableColumn[] = USER_TABLE_COLUMNS;
  constructor(private router : Router) {}

  addUser(id : number) {
    this.router.navigateByUrl(`/admin/user/${id}`);
  }
}
