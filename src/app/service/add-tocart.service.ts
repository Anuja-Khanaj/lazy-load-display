import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTocartService {

  constructor() { }

  // Save an item to the cart
  save(item) {
    let cart = this.getCart();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      cart[existingItemIndex].quantity += item.quantity;
      console.log("Item quantity updated in cart", cart[existingItemIndex]);
      window.alert("Product already exists in cart")
    } else {
      // If the item doesn't exist, add it to the cart
      cart.push(item);
      console.log("Item added to cart", item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Retrieve the cart from localStorage
  getCart() {
    let cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

 

  // Remove an item from the cart
  remove(itemId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Item removed from cart", itemId);
  }

  // Clear the entire cart
  clearCart() {
    localStorage.removeItem("cart");
    console.log("Cart cleared");
  }
}
