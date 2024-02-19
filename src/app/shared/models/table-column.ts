export interface TableColumn {
    title: string,
    priority?: boolean,
    data: string;
    sortFn?: Function;
    isDelete?: boolean;
    isUpdate?: boolean;
}
