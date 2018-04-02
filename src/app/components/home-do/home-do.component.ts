import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-do',
  templateUrl: './home-do.component.html',
  styleUrls: ['./home-do.component.scss']
})
export class HomeDoComponent implements OnInit {
  nYear: number;
  constructor() { }

  ngOnInit() {
    this.nYear = new Date().getFullYear() - 2002;
  }

}
