import { TableColumn } from "src/app/shared/models/table-column";
import { Product } from "../models/product";

export const PRODUCT_TABLE_COLUMNS: TableColumn[] = [
    {
        title: 'Name',
        priority: true,
        data: 'name',
        sortFn: (a: Product, b: Product) => a.name.localeCompare(b.name),

    },
    {
        title: 'Category',
        priority: true,
        data: 'category',
        sortFn: (a: Product, b: Product) => a.category.localeCompare(b.category),
    },
    {
        title: 'Price',
        priority: true,
        data: 'price',
        sortFn: (a: Product, b: Product) => a.price.localeCompare(b.name),

    },
    {
        title: 'Image',
        priority: true,
        data: 'image',
        sortFn: (a: Product, b: Product) => a.image.localeCompare(b.image),
    },
    {
        title: 'Action',
        priority: false,
        data: 'id',
        isDelete: true,
        isUpdate: true
    }
];
