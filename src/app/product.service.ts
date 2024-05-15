import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {id: 1, name: 'Monitor', price: 30.99, description: 'It is hp monitor', category: 'cat1'},
    {id: 2, name: 'Keyboard', price: 20.99, description: 'It is hp keyboard', category: 'cat1'},
    {id: 3, name: 'Laptop', price: 45.99, description: 'It is hp laptop', category: 'cat2'},
    {id: 4, name: 'PenDrive', price: 5.99, description: 'It is scandisk pendrive', category: 'cat3'},
    {id: 5, name: 'HardDisk', price: 7.99, description: 'It is croma harddisk drive', category: 'cat3'}
  ];
  constructor() { }

  /*getProducts(): Observable<string[]>{
    return of(['Monitor', 'Keyboard', 'Laptop', 'PenDrive', 'Mouse', 'HardDisk']);
  }*/

  getProducts(): Observable<Product[]>{
    return of(this.products);
  }

  getProductByCategory(category: string): Observable<Product[]>{
    return of(this.products.filter(product => product.category === category))
  }
}
