import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { PRODUCT_TABLE_COLUMNS } from '../../constants/product-table.column';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    productTableColumns : TableColumn[] = PRODUCT_TABLE_COLUMNS;
}
