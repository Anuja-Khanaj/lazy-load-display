import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product';
import { AllProducts } from '../model/AllProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(AllProducts); // Use mock data
  }

  getProductById(id: number): Observable<Product> {
    const product = AllProducts.find(p => p.id === id);
    return of(product as Product);
  }
}