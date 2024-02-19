import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { USER_TABLE_COLUMNS } from '../../constants/user-table.column';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userTableColumns : TableColumn[] = USER_TABLE_COLUMNS;
}
