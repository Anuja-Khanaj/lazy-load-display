import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products = [
    {
      name: 'Product 1',
      color: 'Red',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 1.'
    },
    {
      name: 'Product 2',
      color: 'Blue',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 2.'
    },
    {
      name: 'Product 3',
      color: 'Green',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 3.'
    },
    {
      name: 'Product 1',
      color: 'Red',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 1.'
    },
    {
      name: 'Product 2',
      color: 'Blue',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 2.'
    },
    {
      name: 'Product 3',
      color: 'Green',
      imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
      description: 'This is a description for product 3.'
    }
  ];
}
