import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../shared/interfaces/products/product-interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: ProductInterface;
  
  constructor() {}

}
