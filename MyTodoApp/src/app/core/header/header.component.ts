import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any[];
  label: string;

  constructor() {
    this.label = 'MyToDo App';
    this.navLinks = [
      {
        label: 'Acheter',
        link: 'buy',
        index: 0
      }, {
        label: 'Vendre',
        link: 'sell',
        index: 1
      },
      {
        label: 'Values',
        link: 'value',
        index: 2
      }
    ];

  }

  ngOnInit(): void {
  }

}
