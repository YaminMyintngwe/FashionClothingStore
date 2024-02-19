import { TableColumn } from "src/app/shared/models/table-column";
import { User } from "../models/user";

export const USER_TABLE_COLUMNS: TableColumn[] = [
    {
        title: 'Name',
        priority: true,
        data: 'name',
        sortFn: (a: User, b: User) => a.name.localeCompare(b.name),
    },
    {
        title: 'Email Address',
        priority: false,
        data: 'email',
        sortFn: (a: User, b: User) => a.email.localeCompare(b.email),
    },
    {
        title: 'Role',
        priority: false,
        data: 'role',
        //sortFn: (a: User, b: User) => a.role.localeCompare(b.role),
    },
    {
        title: 'Action',
        priority: false,
        data: 'id',
        isDelete: true,
        isUpdate: true
    }
];
