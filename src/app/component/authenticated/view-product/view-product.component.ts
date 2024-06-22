import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Product } from 'src/app/model/Product';
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
    :ClipboardService
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
}
