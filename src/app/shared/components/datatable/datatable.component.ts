import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/table-column';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input() tableColumns : TableColumn[] = [];
  dataSet = [
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
    {
      name: "Yellow T-Shirt",
      category: "Women's Collection",
      price: '$180',
      image: 'Womens Collection',
    },
  ];
}
