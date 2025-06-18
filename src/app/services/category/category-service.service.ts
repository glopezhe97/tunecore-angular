import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductInterface } from '../../shared/interfaces/products/product-interface';
import { HttpClient, HttpParams } from "@angular/common/http"; // API Calls
import { CategoryInterface } from '../../shared/interfaces/category/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private urlCategories = 'http://localhost:3000/api/categories'; // API URL Category
  constructor(private httpCLient: HttpClient) { }

  //GET
  getAllCategories():Observable<CategoryInterface[]> {
    return this.httpCLient.get<CategoryInterface[]>(this.urlCategories);
  }
}
