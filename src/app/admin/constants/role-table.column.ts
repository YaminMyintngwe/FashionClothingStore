import { TableColumn } from "src/app/shared/models/table-column";
import { Role } from "../models/role";

export const ROLE_TABLE_COLUMNS: TableColumn[] = [
    {
        title: 'Name',
        priority: true,
        data: 'name',
        sortFn: (a: Role, b: Role) => a.name.localeCompare(b.name),
    },
    {
        title: 'Description',
        priority: false,
        data: 'description',
        sortFn: (a: Role, b: Role) => a.description.localeCompare(b.description),
    },
    {
        title: 'Action',
        priority: false,
        data: 'id',
        isDelete: true,
        isUpdate: true
    }
];
