import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() productName: string;
  @Input() price: number;
  @Input() numberOfSales: number;
  @Input() totalRevenue: number;

  constructor() { }

  ngOnInit(): void {
  }

}
