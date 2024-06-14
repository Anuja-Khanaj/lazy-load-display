import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  childrenClothes = [
    {
      name: 'Kids T-Shirt',
      color: 'Yellow',
      imageUrl: 'path/to/kids-tshirt.jpg',
      description: 'A bright yellow t-shirt for kids.'
    },
    {
      name: 'Kids Shorts',
      color: 'Blue',
      imageUrl: 'path/to/kids-shorts.jpg',
      description: 'Comfortable blue shorts for kids.'
    },
    {
      name: 'Kids Hoodie',
      color: 'Green',
      imageUrl: 'path/to/kids-hoodie.jpg',
      description: 'Warm green hoodie for kids.'
    },
    {
      name: 'Kids Jacket',
      color: 'Red',
      imageUrl: 'path/to/kids-jacket.jpg',
      description: 'Stylish red jacket for kids.'
    },
    {
      name: 'Kids Jeans',
      color: 'Black',
      imageUrl: 'path/to/kids-jeans.jpg',
      description: 'Durable black jeans for kids.'
    },
    {
      name: 'Kids Dress',
      color: 'Pink',
      imageUrl: 'path/to/kids-dress.jpg',
      description: 'Cute pink dress for girls.'
    },
    {
      name: 'Kids Sweater',
      color: 'White',
      imageUrl: 'path/to/kids-sweater.jpg',
      description: 'Cozy white sweater for kids.'
    },
    {
      name: 'Kids Sneakers',
      color: 'Gray',
      imageUrl: 'path/to/kids-sneakers.jpg',
      description: 'Comfortable gray sneakers for kids.'
    },
    {
      name: 'Kids Hat',
      color: 'Orange',
      imageUrl: 'path/to/kids-hat.jpg',
      description: 'Bright orange hat for kids.'
    },
    {
      name: 'Kids Pajamas',
      color: 'Purple',
      imageUrl: 'path/to/kids-pajamas.jpg',
      description: 'Soft purple pajamas for kids.'
    }
  ];

  ladiesClothes = [
    {
      name: 'Ladies Blouse',
      color: 'White',
      imageUrl: 'path/to/ladies-blouse.jpg',
      description: 'Elegant white blouse for ladies.'
    },
    {
      name: 'Ladies Skirt',
      color: 'Black',
      imageUrl: 'path/to/ladies-skirt.jpg',
      description: 'Chic black skirt for ladies.'
    },
    {
      name: 'Ladies Dress',
      color: 'Red',
      imageUrl: 'path/to/ladies-dress.jpg',
      description: 'Stunning red dress for ladies.'
    },
    {
      name: 'Ladies Jacket',
      color: 'Blue',
      imageUrl: 'path/to/ladies-jacket.jpg',
      description: 'Stylish blue jacket for ladies.'
    },
    {
      name: 'Ladies Jeans',
      color: 'Navy',
      imageUrl: 'path/to/ladies-jeans.jpg',
      description: 'Comfortable navy jeans for ladies.'
    },
    {
      name: 'Ladies Sweater',
      color: 'Gray',
      imageUrl: 'path/to/ladies-sweater.jpg',
      description: 'Cozy gray sweater for ladies.'
    },
    {
      name: 'Ladies T-Shirt',
      color: 'Pink',
      imageUrl: 'path/to/ladies-tshirt.jpg',
      description: 'Casual pink t-shirt for ladies.'
    },
    {
      name: 'Ladies Shorts',
      color: 'Beige',
      imageUrl: 'path/to/ladies-shorts.jpg',
      description: 'Comfortable beige shorts for ladies.'
    },
    {
      name: 'Ladies Shoes',
      color: 'Brown',
      imageUrl: 'path/to/ladies-shoes.jpg',
      description: 'Stylish brown shoes for ladies.'
    },
    {
      name: 'Ladies Hat',
      color: 'Yellow',
      imageUrl: 'path/to/ladies-hat.jpg',
      description: 'Trendy yellow hat for ladies.'
    }
  ];
  
  menClothes = [
    {
      name: 'Men T-Shirt',
      color: 'Black',
      imageUrl: 'path/to/men-tshirt.jpg',
      description: 'Classic black t-shirt for men.'
    },
    {
      name: 'Men Jeans',
      color: 'Blue',
      imageUrl: 'path/to/men-jeans.jpg',
      description: 'Comfortable blue jeans for men.'
    },
    {
      name: 'Men Hoodie',
      color: 'Gray',
      imageUrl: 'path/to/men-hoodie.jpg',
      description: 'Warm gray hoodie for men.'
    },
    {
      name: 'Men Jacket',
      color: 'Brown',
      imageUrl: 'path/to/men-jacket.jpg',
      description: 'Stylish brown jacket for men.'
    },
    {
      name: 'Men Suit',
      color: 'Navy',
      imageUrl: 'path/to/men-suit.jpg',
      description: 'Elegant navy suit for men.'
    },
    {
      name: 'Men Sweater',
      color: 'Green',
      imageUrl: 'path/to/men-sweater.jpg',
      description: 'Cozy green sweater for men.'
    },
    {
      name: 'Men Shorts',
      color: 'Khaki',
      imageUrl: 'path/to/men-shorts.jpg',
      description: 'Casual khaki shorts for men.'
    },
    {
      name: 'Men Shoes',
      color: 'Black',
      imageUrl: 'path/to/men-shoes.jpg',
      description: 'Stylish black shoes for men.'
    },
    {
      name: 'Men Hat',
      color: 'Blue',
      imageUrl: 'path/to/men-hat.jpg',
      description: 'Trendy blue hat for men.'
    },
    {
      name: 'Men Belt',
      color: 'Brown',
      imageUrl: 'path/to/men-belt.jpg',
      description: 'Classic brown belt for men.'
    }
  ];
  
}
