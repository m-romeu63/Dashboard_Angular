import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() value: string;
  @Input() evolution: string;

  constructor() { }

  ngOnInit(): void {
  }

}
