import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() id: number = 0;
  srrc: string = '';
  constructor() {}

  ngOnInit(): void {
    this.srrc = `../../../assets/persons/person-${this.id}.png`;
  }
}
