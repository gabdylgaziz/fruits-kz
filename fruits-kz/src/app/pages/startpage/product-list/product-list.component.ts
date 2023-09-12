import { Component } from '@angular/core';
import { Product, products } from 'src/app/models/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[] = products;
  filtered_prod = [...products];
  // будет категория selectedCategory : string = "None"

  // addProduct() {

  // }
}

