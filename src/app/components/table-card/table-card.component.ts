import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {
  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
