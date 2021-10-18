import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart-card',
  templateUrl: './line-chart-card.component.html',
  styleUrls: ['./line-chart-card.component.css']
})
export class LineChartCardComponent implements OnInit {
  @Input() cardTitle: string;

  chartType: ChartType;
  labels: string[];
  datasets: ChartDataset[];

  constructor() {
    this.chartType = 'line';
    this.labels = ['Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre'];
    this.datasets = [{
      label: 'Valeur du panier moyen',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2
  }]

  }

  ngOnInit(): void {
  }

}
