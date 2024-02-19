import { TableColumn } from "src/app/shared/models/table-column";
import { Blog } from "../models/blog";

export const BLOG_TABLE_COLUMNS: TableColumn[] = [
    {
        title: 'Title',
        priority: true,
        data: 'title',
        sortFn: (a: Blog, b: Blog) => a.title.localeCompare(b.title),
    },
    {
        title: 'Content',
        priority: false,
        data: 'content',
        sortFn: (a: Blog, b: Blog) => a.content.localeCompare(b.content),
    },
    {
        title: 'Date',
        priority: false,
        data: 'date',
        sortFn: (a: Blog, b: Blog) => a.date.localeCompare(b.date),

    },
    {
        title: 'Action',
        priority: false,
        data: 'id',
        isDelete: true,
        isUpdate: true
    }
];
