import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  names = ['Johanna', 'Johnny', 'Amber', 'Anonymous', 'Mark'];
  descriptions = [
    '24 Jahre alt',
    '17 Jahre alt',
    '18 Jahre alt',
    '100 Jahre alt',
    '28 Jahre alt',
  ];
  images = [
    '/assets/img/yoga.jpg',
    '/assets/img/australianS.jpg',
    '/assets/LogoMakr-4amGRx.png',
    '/assets/img/girl-g8e84bf231_640.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
