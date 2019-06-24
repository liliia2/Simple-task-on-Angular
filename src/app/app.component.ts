import { Component } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrays = [
    { name: 'Lorem ipsum dolor sit amet', time: 1561375013 },
    { name: 'Lorem ipsum dolor sit amet', time: 1561281014 },
    { name: 'Lorem ipsum dolor sit amet', time: 1561225618 },
    { name: 'Lorem ipsum dolor sit amet', time: 1561078214 },
    { name: 'Lorem ipsum dolor sit amet', time: 1560978214 },
    { name: 'Lorem ipsum dolor sit amet', time: 1560115625 },
    { name: 'Lorem ipsum dolor sit amet', time: 1559436419 }
  ];

  today = new Date();
  jstoday = '';

  yesterday = new Date().setDate(new Date().getDate() - 1);
  jsyesterday = '';

  constructor() {
    this.jstoday = formatDate(this.today, 'd MMMM y', 'en-US');
    this.jsyesterday = formatDate(this.yesterday, 'd MMMM y', 'en-US');
  }

  toShortForm(time) {
    return formatDate((time*1000), 'd MMMM y', 'en-US');
  }

}
