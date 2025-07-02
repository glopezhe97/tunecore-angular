import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProductsServiceService } from '../services/products/products-service.service';
import { map, Observable, tap } from 'rxjs';
import { ProductInterface } from '../shared/interfaces/products/product-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public products$!: Observable<ProductInterface[]>;
   public categories: any;
 
   constructor(private productService: ProductsServiceService) {}
   
   ngOnInit(): void {
     this.products$ = this.productService.getAllProducts('')
      .pipe(
        map((products) => 
          products.filter(product => product.isOnSale === true)),
          tap(filteredProducts => console.log('Productos en oferta:', filteredProducts))
      ); // products: fill observable
     console.log(this.products$);
   }
}
