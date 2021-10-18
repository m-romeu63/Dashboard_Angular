import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  products: Array<Product>

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.products.subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

}
