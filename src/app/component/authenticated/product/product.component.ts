import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  searchText:string;
  searchTextm:string;
  searchTextk:string;
  selectedProduct: any;
  constructor(private productService: ProductService, private router: Router, private product:ProductService){}

   products  

  myControl = new FormControl('');
  options: string[] = ['T-Shirt', 'Shorts', 'Hoodie', 'Jacket', 'Jeans', 'Dress', 'Sweater', 'Shoes', 'Hat', 'Pajamas'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {

//  this.products = this.product.Load()

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    // const id = this.route.snapshot.paramMap.get('id'); //get from route snapshot
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log(this.selectProduct);
    
  }
  viewProduct(productId: number): void {
    this.router.navigate(['dashboard/view', productId]);
  }
}
