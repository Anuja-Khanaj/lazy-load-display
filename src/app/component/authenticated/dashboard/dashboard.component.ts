import { Component, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { AllProducts } from 'src/app/model/AllProducts';
import { Product } from 'src/app/model/Product';
import { AddTocartService } from 'src/app/service/add-tocart.service';
import { ProductService } from 'src/app/service/product.service';
import { WordPipe } from 'src/app/word.pipe';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  product: Product[] | undefined;
  products

  constructor(private route: ActivatedRoute, private productService: ProductService,private cart:AddTocartService,private router:Router
  ) {
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.product = AllProducts
  }
  viewProduct(productId: number): void {
    this.router.navigate(['dashboard/view', productId]);
  }
  addtocart(data){
    this.cart.save(data)
    window.alert("Product added to cart")
  }
}
