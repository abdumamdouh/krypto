import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() heading: string = '';
  @Input() text: string = '';
  @Input() button: string = '';
  @Input() id: number = 0;
  @Input() reverse: boolean = false;
  src: string = '';

  constructor() {}

  ngOnInit(): void {
    this.src = `../../../assets/sections/section-${this.id}.png`;
  }
}
