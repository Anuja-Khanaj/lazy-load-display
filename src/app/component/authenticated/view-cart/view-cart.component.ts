import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTocartService } from 'src/app/service/add-tocart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent  implements OnInit{
  cartData=[];
  constructor(private cart:AddTocartService,private router:Router){}
  ngOnInit(): void {
    this.cartData = this.cart.getCart();
  }

   viewProduct(productId: number): void {
    this.router.navigate(['dashboard/view', productId]);
  }
}
