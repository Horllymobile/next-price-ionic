import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: IProduct[];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.data = [
        {
          id: 'ID1223',
          title: 'Gas',
          price: 700,
          uom: 'kg',
          company: 'tobic gas station',
        },
        {
          id: 'ID1224',
          title: 'egg roll',
          uom: 'one',
          price: 100,
          company: 'general',
        },
        {
          id: 'ID1225',
          title: 'Kerosine',
          uom: 'ltr',
          price: 200,
          company: 'robine fill station',
        },
      ];
    }, 2000);
  }
}

interface IProduct {
  id?: string;
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
}
