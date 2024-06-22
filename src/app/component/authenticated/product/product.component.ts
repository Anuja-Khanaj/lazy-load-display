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
  
  childrenClothes = [

        {
          id: 1,
          name: 'Kids T-Shirt',
          color: 'Yellow',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'A bright yellow t-shirt for kids.',
          type: 'T-Shirt',
          category: 'Kids'
        },
        {
          id: 2,
          name: 'Kids Shorts',
          color: 'Blue',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Comfortable blue shorts for kids.',
          type: 'Shorts',
          category: 'Kids'
        },
        {
          id: 3,
          name: 'Kids Hoodie',
          color: 'Green',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Warm green hoodie for kids.',
          type: 'Hoodie',
          category: 'Kids'
        },
        {
          id: 4,
          name: 'Kids Jacket',
          color: 'Red',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stylish red jacket for kids.',
          type: 'Jacket',
          category: 'Kids'
        },
        {
          id: 5,
          name: 'Kids Jeans',
          color: 'Black',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Durable black jeans for kids.',
          type: 'Jeans',
          category: 'Kids'
        },
        {
          id: 6,
          name: 'Kids Dress',
          color: 'Pink',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Cute pink dress for girls.',
          type: 'Dress',
          category: 'Kids'
        },
        {
          id: 7,
          name: 'Kids Sweater',
          color: 'White',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Cozy white sweater for kids.',
          type: 'Sweater',
          category: 'Kids'
        },
        {
          id: 8,
          name: 'Kids Sneakers',
          color: 'Gray',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Comfortable gray sneakers for kids.',
          type: 'Shoes',
          category: 'Kids'
        },
        {
          id: 9,
          name: 'Kids Hat',
          color: 'Orange',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Bright orange hat for kids.',
          type: 'Hat',
          category: 'Kids'
        },
        {
          id: 10,
          name: 'Kids Pajamas',
          color: 'Purple',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Soft purple pajamas for kids.',
          type: 'Pajamas',
          category: 'Kids'
        },
        // Ladies Clothes
        {
          id: 11,
          name: 'Ladies Blouse',
          color: 'White',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Elegant white blouse for ladies.',
          type: 'Blouse',
          category: 'Women'
        },
        {
          id: 12,
          name: 'Ladies Skirt',
          color: 'Black',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Chic black skirt for ladies.',
          type: 'Skirt',
          category: 'Women'
        },
        {
          id: 13,
          name: 'Ladies Dress',
          color: 'Red',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stunning red dress for ladies.',
          type: 'Dress',
          category: 'Women'
        },
        {
          id: 14,
          name: 'Ladies Jacket',
          color: 'Blue',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stylish blue jacket for ladies.',
          type: 'Jacket',
          category: 'Women'
        },
        {
          id: 15,
          name: 'Ladies Jeans',
          color: 'Navy',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Comfortable navy jeans for ladies.',
          type: 'Jeans',
          category: 'Women'
        },
        {
          id: 16,
          name: 'Ladies Sweater',
          color: 'Gray',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Cozy gray sweater for ladies.',
          type: 'Sweater',
          category: 'Women'
        },
        {
          id: 17,
          name: 'Ladies T-Shirt',
          color: 'Pink',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Casual pink t-shirt for ladies.',
          type: 'T-Shirt',
          category: 'Women'
        },
        {
          id: 18,
          name: 'Ladies Shorts',
          color: 'Beige',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Comfortable beige shorts for ladies.',
          type: 'Shorts',
          category: 'Women'
        },
        {
          id: 19,
          name: 'Ladies Shoes',
          color: 'Brown',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stylish brown shoes for ladies.',
          type: 'Shoes',
          category: 'Women'
        },
        {
          id: 20,
          name: 'Ladies Hat',
          color: 'Yellow',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Trendy yellow hat for ladies.',
          type: 'Hat',
          category: 'Women'
        },
        // Men Clothes
        {
          id: 21,
          name: 'Men T-Shirt',
          color: 'Black',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Classic black t-shirt for men.',
          type: 'T-Shirt',
          category: 'Men'
        },
        {
          id: 22,
          name: 'Men Jeans',
          color: 'Blue',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Comfortable blue jeans for men.',
          type: 'Jeans',
          category: 'Men'
        },
        {
          id: 23,
          name: 'Men Hoodie',
          color: 'Gray',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Warm gray hoodie for men.',
          type: 'Hoodie',
          category: 'Men'
        },
        {
          id: 24,
          name: 'Men Jacket',
          color: 'Brown',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stylish brown jacket for men.',
          type: 'Jacket',
          category: 'Men'
        },
        {
          id: 25,
          name: 'Men Suit',
          color: 'Navy',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Elegant navy suit for men.',
          type: 'Suit',
          category: 'Men'
        },
        {
          id: 26,
          name: 'Men Sweater',
          color: 'Green',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Cozy green sweater for men.',
          type: 'Sweater',
          category: 'Men'
        },
        {
          id: 27,
          name: 'Men Shorts',
          color: 'Khaki',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Casual khaki shorts for men.',
          type: 'Shorts',
          category: 'Men'
        },
        {
          id: 28,
          name: 'Men Shoes',
          color: 'Black',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Stylish black shoes for men.',
          type: 'Shoes',
          category: 'Men'
        },
        {
          id: 29,
          name: 'Men Hat',
          color: 'Blue',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Trendy blue hat for men.',
          type: 'Hat',
          category: 'Men'
        },
        {
          id: 30,
          name: 'Men Belt',
          color: 'Brown',
          imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
          description: 'Classic brown belt for men.',
          type: 'Belt',
          category: 'Men'
        }
      
    
  ];
  
  // ladiesClothes = [
  //   {
  //     name: 'Ladies Blouse',
  //     color: 'White',
  //     imageUrl: 'path/to/ladies-blouse.jpg',
  //     description: 'Elegant white blouse for ladies.',
  //     type: 'Blouse'
  //   },
  //   {
  //     name: 'Ladies Skirt',
  //     color: 'Black',
  //     imageUrl: 'path/to/ladies-skirt.jpg',
  //     description: 'Chic black skirt for ladies.',
  //     type: 'Skirt'
  //   },
  //   {
  //     name: 'Ladies Dress',
  //     color: 'Red',
  //     imageUrl: 'path/to/ladies-dress.jpg',
  //     description: 'Stunning red dress for ladies.',
  //     type: 'Dress'
  //   },
  //   {
  //     name: 'Ladies Jacket',
  //     color: 'Blue',
  //     imageUrl: 'path/to/ladies-jacket.jpg',
  //     description: 'Stylish blue jacket for ladies.',
  //     type: 'Jacket'
  //   },
  //   {
  //     name: 'Ladies Jeans',
  //     color: 'Navy',
  //     imageUrl: 'path/to/ladies-jeans.jpg',
  //     description: 'Comfortable navy jeans for ladies.',
  //     type: 'Jeans'
  //   },
  //   {
  //     name: 'Ladies Sweater',
  //     color: 'Gray',
  //     imageUrl: 'path/to/ladies-sweater.jpg',
  //     description: 'Cozy gray sweater for ladies.',
  //     type: 'Sweater'
  //   },
  //   {
  //     name: 'Ladies T-Shirt',
  //     color: 'Pink',
  //     imageUrl: 'path/to/ladies-tshirt.jpg',
  //     description: 'Casual pink t-shirt for ladies.',
  //     type: 'T-Shirt'
  //   },
  //   {
  //     name: 'Ladies Shorts',
  //     color: 'Beige',
  //     imageUrl: 'path/to/ladies-shorts.jpg',
  //     description: 'Comfortable beige shorts for ladies.',
  //     type: 'Shorts'
  //   },
  //   {
  //     name: 'Ladies Shoes',
  //     color: 'Brown',
  //     imageUrl: 'path/to/ladies-shoes.jpg',
  //     description: 'Stylish brown shoes for ladies.',
  //     type: 'Shoes'
  //   },
  //   {
  //     name: 'Ladies Hat',
  //     color: 'Yellow',
  //     imageUrl: 'path/to/ladies-hat.jpg',
  //     description: 'Trendy yellow hat for ladies.',
  //     type: 'Hat'
  //   }
  // ];

  // menClothes = [
  //   {
  //     name: 'Men T-Shirt',
  //     color: 'Black',
  //     imageUrl: 'path/to/men-tshirt.jpg',
  //     description: 'Classic black t-shirt for men.',
  //     type: 'T-Shirt'
  //   },
  //   {
  //     name: 'Men Jeans',
  //     color: 'Blue',
  //     imageUrl: 'path/to/men-jeans.jpg',
  //     description: 'Comfortable blue jeans for men.',
  //     type: 'Jeans'
  //   },
  //   {
  //     name: 'Men Hoodie',
  //     color: 'Gray',
  //     imageUrl: 'path/to/men-hoodie.jpg',
  //     description: 'Warm gray hoodie for men.',
  //     type: 'Hoodie'
  //   },
  //   {
  //     name: 'Men Jacket',
  //     color: 'Brown',
  //     imageUrl: 'path/to/men-jacket.jpg',
  //     description: 'Stylish brown jacket for men.',
  //     type: 'Jacket'
  //   },
  //   {
  //     name: 'Men Suit',
  //     color: 'Navy',
  //     imageUrl: 'path/to/men-suit.jpg',
  //     description: 'Elegant navy suit for men.',
  //     type: 'Suit'
  //   },
  //   {
  //     name: 'Men Sweater',
  //     color: 'Green',
  //     imageUrl: 'path/to/men-sweater.jpg',
  //     description: 'Cozy green sweater for men.',
  //     type: 'Sweater'
  //   },
  //   {
  //     name: 'Men Shorts',
  //     color: 'Khaki',
  //     imageUrl: 'path/to/men-shorts.jpg',
  //     description: 'Casual khaki shorts for men.',
  //     type: 'Shorts'
  //   },
  //   {
  //     name: 'Men Shoes',
  //     color: 'Black',
  //     imageUrl: 'path/to/men-shoes.jpg',
  //     description: 'Stylish black shoes for men.',
  //     type: 'Shoes'
  //   },
  //   {
  //     name: 'Men Hat',
  //     color: 'Blue',
  //     imageUrl: 'path/to/men-hat.jpg',
  //     description: 'Trendy blue hat for men.',
  //     type: 'Hat'
  //   },
  //   {
  //     name: 'Men Belt',
  //     color: 'Brown',
  //     imageUrl: 'path/to/men-belt.jpg',
  //     description: 'Classic brown belt for men.',
  //     type: 'Belt'
  //   }
  // ];
  
  //  products = [
  //   // Children Clothes
  //   {
  //     id: 1,
  //     name: 'Kids T-Shirt',
  //     color: 'Yellow',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'A bright yellow t-shirt for kids.',
  //     type: 'T-Shirt',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 2,
  //     name: 'Kids Shorts',
  //     color: 'Blue',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Comfortable blue shorts for kids.',
  //     type: 'Shorts',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 3,
  //     name: 'Kids Hoodie',
  //     color: 'Green',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Warm green hoodie for kids.',
  //     type: 'Hoodie',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 4,
  //     name: 'Kids Jacket',
  //     color: 'Red',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stylish red jacket for kids.',
  //     type: 'Jacket',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 5,
  //     name: 'Kids Jeans',
  //     color: 'Black',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Durable black jeans for kids.',
  //     type: 'Jeans',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 6,
  //     name: 'Kids Dress',
  //     color: 'Pink',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Cute pink dress for girls.',
  //     type: 'Dress',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 7,
  //     name: 'Kids Sweater',
  //     color: 'White',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Cozy white sweater for kids.',
  //     type: 'Sweater',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 8,
  //     name: 'Kids Sneakers',
  //     color: 'Gray',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Comfortable gray sneakers for kids.',
  //     type: 'Shoes',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 9,
  //     name: 'Kids Hat',
  //     color: 'Orange',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Bright orange hat for kids.',
  //     type: 'Hat',
  //     category: 'Kids'
  //   },
  //   {
  //     id: 10,
  //     name: 'Kids Pajamas',
  //     color: 'Purple',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Soft purple pajamas for kids.',
  //     type: 'Pajamas',
  //     category: 'Kids'
  //   },
  //   // Ladies Clothes
  //   {
  //     id: 11,
  //     name: 'Ladies Blouse',
  //     color: 'White',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Elegant white blouse for ladies.',
  //     type: 'Blouse',
  //     category: 'Women'
  //   },
  //   {
  //     id: 12,
  //     name: 'Ladies Skirt',
  //     color: 'Black',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Chic black skirt for ladies.',
  //     type: 'Skirt',
  //     category: 'Women'
  //   },
  //   {
  //     id: 13,
  //     name: 'Ladies Dress',
  //     color: 'Red',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stunning red dress for ladies.',
  //     type: 'Dress',
  //     category: 'Women'
  //   },
  //   {
  //     id: 14,
  //     name: 'Ladies Jacket',
  //     color: 'Blue',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stylish blue jacket for ladies.',
  //     type: 'Jacket',
  //     category: 'Women'
  //   },
  //   {
  //     id: 15,
  //     name: 'Ladies Jeans',
  //     color: 'Navy',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Comfortable navy jeans for ladies.',
  //     type: 'Jeans',
  //     category: 'Women'
  //   },
  //   {
  //     id: 16,
  //     name: 'Ladies Sweater',
  //     color: 'Gray',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Cozy gray sweater for ladies.',
  //     type: 'Sweater',
  //     category: 'Women'
  //   },
  //   {
  //     id: 17,
  //     name: 'Ladies T-Shirt',
  //     color: 'Pink',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Casual pink t-shirt for ladies.',
  //     type: 'T-Shirt',
  //     category: 'Women'
  //   },
  //   {
  //     id: 18,
  //     name: 'Ladies Shorts',
  //     color: 'Beige',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Comfortable beige shorts for ladies.',
  //     type: 'Shorts',
  //     category: 'Women'
  //   },
  //   {
  //     id: 19,
  //     name: 'Ladies Shoes',
  //     color: 'Brown',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stylish brown shoes for ladies.',
  //     type: 'Shoes',
  //     category: 'Women'
  //   },
  //   {
  //     id: 20,
  //     name: 'Ladies Hat',
  //     color: 'Yellow',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Trendy yellow hat for ladies.',
  //     type: 'Hat',
  //     category: 'Women'
  //   },
  //   // Men Clothes
  //   {
  //     id: 21,
  //     name: 'Men T-Shirt',
  //     color: 'Black',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Classic black t-shirt for men.',
  //     type: 'T-Shirt',
  //     category: 'Men'
  //   },
  //   {
  //     id: 22,
  //     name: 'Men Jeans',
  //     color: 'Blue',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Comfortable blue jeans for men.',
  //     type: 'Jeans',
  //     category: 'Men'
  //   },
  //   {
  //     id: 23,
  //     name: 'Men Hoodie',
  //     color: 'Gray',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Warm gray hoodie for men.',
  //     type: 'Hoodie',
  //     category: 'Men'
  //   },
  //   {
  //     id: 24,
  //     name: 'Men Jacket',
  //     color: 'Brown',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stylish brown jacket for men.',
  //     type: 'Jacket',
  //     category: 'Men'
  //   },
  //   {
  //     id: 25,
  //     name: 'Men Suit',
  //     color: 'Navy',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Elegant navy suit for men.',
  //     type: 'Suit',
  //     category: 'Men'
  //   },
  //   {
  //     id: 26,
  //     name: 'Men Sweater',
  //     color: 'Green',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Cozy green sweater for men.',
  //     type: 'Sweater',
  //     category: 'Men'
  //   },
  //   {
  //     id: 27,
  //     name: 'Men Shorts',
  //     color: 'Khaki',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Casual khaki shorts for men.',
  //     type: 'Shorts',
  //     category: 'Men'
  //   },
  //   {
  //     id: 28,
  //     name: 'Men Shoes',
  //     color: 'Black',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Stylish black shoes for men.',
  //     type: 'Shoes',
  //     category: 'Men'
  //   },
  //   {
  //     id: 29,
  //     name: 'Men Hat',
  //     color: 'Blue',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Trendy blue hat for men.',
  //     type: 'Hat',
  //     category: 'Men'
  //   },
  //   {
  //     id: 30,
  //     name: 'Men Belt',
  //     color: 'Brown',
  //     imageUrl: '../../../../assets/sackcloth-sackcloth-textured-laptop-ipad.jpg',
  //     description: 'Classic brown belt for men.',
  //     type: 'Belt',
  //     category: 'Men'
  //   }
  // ];
  

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
