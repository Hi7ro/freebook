import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-card',
  templateUrl: './free-card.component.html',
  styleUrls: ['./free-card.component.scss'],
})
export class FreeCardComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: any = '';

  constructor() {}

  ngOnInit(): void {}
}
