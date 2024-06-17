import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  // @Input() product: any;
  product = {
    id: 1,
    name: 'Sample Product',
    colors: ['#FD9B63', '#55AD9B', '#95D2B3', '#D8EFD3'] // Example colors in hex format
  };

}
