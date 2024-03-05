import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { PRODUCT_TABLE_COLUMNS } from '../../constants/product-table.column';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
    productTableColumns : TableColumn[] = PRODUCT_TABLE_COLUMNS;
    products! : Product[];

    constructor(private router: Router, private productService : ProductService) {}

    ngOnInit(): void {
      this.productService.getProduct().subscribe((productList) => {
        console.log(productList);
        this.products = (<Product[]>productList);
      })
    }

    addProduct(id: string) {
      this.router.navigateByUrl(`/admin/product/${id}`);
    }
}
