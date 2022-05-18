import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postText = [
    'Hallo Zusammen!',
    'Wieder einmal auf einer Mission',
    'Jemand lust auf ein Treffen?',
    'Lasst uns die Welt retten, Heute 20:00 Uhr Zoom-Call (Link in der Beschreibung)',
  ];

  image = [
    'assets/img/girl-g8e84bf231_640.jpg',
    'assets/LogoMakr-4amGRx.png',
    'assets/img/yoga.jpg',
    'assets/img/australianS.jpg',
  ];

  buttonClicked() {
    alert('Hallo, wie geht es dir?');
  }
}
