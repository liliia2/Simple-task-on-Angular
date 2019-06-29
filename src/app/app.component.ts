import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrays = [
    { text: 'Lorem ipsum dolor sit amet', time: 1561795013 },
    { text: 'Lorem ipsum dolor sit amet', time: 1561715013 },
    { text: 'Lorem ipsum dolor sit amet', time: 1561225618 },
    { text: 'Lorem ipsum dolor sit amet', time: 1561224018 },
    { text: 'Lorem ipsum dolor sit amet', time: 1561211018 },
    { text: 'Lorem ipsum dolor sit amet', time: 1560978214 },
    { text: 'Lorem ipsum dolor sit amet', time: 1559436419 },
    { text: 'Lorem ipsum dolor sit amet', time: 1460115625 },
    { text: 'Lorem ipsum dolor sit amet', time: 1552115625 }
  ];

  constructor() {
  }

}
