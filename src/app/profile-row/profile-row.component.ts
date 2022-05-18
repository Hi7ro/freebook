import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Frederike';
  @Input() description = '24 Jahre alt';
  @Input() img = '/assets/img/yoga.jpg';

  constructor() {}

  ngOnInit(): void {}
}
