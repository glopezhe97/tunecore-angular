import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsServiceService } from '../../services/products/products-service.service';
import { CategoryServiceService } from '../../services/category/category-service.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductInterface } from '../../shared/interfaces/products/product-interface';
import { CommonModule } from '@angular/common';
import { CategoryInterface } from '../../shared/interfaces/category/category-interface';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<ProductInterface[]>;
  public categories: any;

  constructor(private productService: ProductsServiceService,
    private categoryService: CategoryServiceService
  ) {}
  
  ngOnInit(): void {
    this.products$ = this.productService.getAllProductsByCategory('Guitars', ''); // products: fill observable
    console.log(this.products$);
  }
}
