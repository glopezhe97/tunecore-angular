import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsServiceService } from '../../services/products/products-service.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductInterface } from '../interface/product-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<ProductInterface[]>
  constructor(private productService: ProductsServiceService) {}
  
  ngOnInit(): void {
    this.productService.getAllProducts('').subscribe(); // fill observable
    this.products$ = this.productService.products$;
  }
}
