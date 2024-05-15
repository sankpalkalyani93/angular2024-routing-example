import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products: Product[] = [];
  categoryFilter: string | null = null;
  category: string | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    /*this.productService.getProducts().subscribe(
      (values) => {
        this.products = values;
      },
      (error) => {
        console.log("Error received : ", error);
      },
      () => {
        console.log("Process completed");
      }

    );*/
  
    /*this.route.queryParams.subscribe(
      params => {
        this.categoryFilter = params['category'];
        this.fetchProducts();
      }
    );*/

    this.route.paramMap.subscribe(
      // subscribing the route params to get the category parameter
      params => {
        this.category = params.get('category');
        this.fetchProducts();
      }
    );
  }

  fetchProducts(): void{
    /*if(this.categoryFilter){
      this.productService.getProductByCategory(this.categoryFilter).subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log("error received : ", error);
        },
        () => {
          console.log("process complete");
        }
      );*/
    if(this.category){  
      this.productService.getProductByCategory(this.category).subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log("error received : ", error);
        },
        () => {
          console.log("process complete");
        }
      );
    }else{
      this.productService.getProducts().subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log("error received", error);
        },
        () => {
          console.log("process complete")
        }
      );
    }
  }

}
