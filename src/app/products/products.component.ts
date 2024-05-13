import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products: Product[] = [];
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (values) => {
        this.products = values;
      },
      (error) => {
        console.log("Error received : ", error);
      },
      () => {
        console.log("Process completed");
      }

    );
  
  }

}
