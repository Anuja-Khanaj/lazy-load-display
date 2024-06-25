import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Product } from 'src/app/model/Product';
import { AddTocartService } from 'src/app/service/add-tocart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  product: Product | undefined;
  currenturl:string
  constructor(private route: ActivatedRoute, private productService: ProductService,private clipboard
    :ClipboardService,private cart:AddTocartService,private router:Router
  ) {
this.currenturl = window.location.href
   }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe((data) => {
        this.product = data;
      });
    }
  }
  copyUrlToClipboard() {
    this.clipboard.copyFromContent(this.currenturl);
    // Optionally, you can provide user feedback
    alert('URL copied to clipboard');
  }
  addtocart(data){
    this.cart.save(data)
    window.alert("Product added to cart")
  }
  gotoPayment(){
    this.router.navigate(['../../../dashboard/buy'])
  }
}
