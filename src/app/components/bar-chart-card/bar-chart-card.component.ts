import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart-card',
  templateUrl: './bar-chart-card.component.html',
  styleUrls: ['./bar-chart-card.component.css'],
})
export class BarChartCardComponent implements OnInit {
  @Input() cardTitle: string;

  chartType: ChartType;
  labels: string[];
  datasets: ChartDataset[];

  constructor() {
    this.chartType = 'bar';
    this.labels = ['Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre'];
    this.datasets = [
      {
        label: 'Total des ventes par mois',
        data: [6741, 5863, 4105, 7124, 5674, 5236],
        backgroundColor: ['Green'],
      },
    ];



  }

  ngOnInit(): void {}
}
