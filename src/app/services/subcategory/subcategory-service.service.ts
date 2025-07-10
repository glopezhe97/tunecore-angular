import { Injectable } from '@angular/core';
import { CategoryServiceService } from '../category/category-service.service';
import { SubcategoryInterface } from '../../shared/interfaces/subcategory/subcategory-interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryServiceService {
  private subcategoryUrl = 'http://localhost:3000/api/subcategories';

  constructor(categoryService: CategoryServiceService,
              private httpCLient: HttpClient) { }

  getAllSubcategories(): Observable<SubcategoryInterface[]> {
    return this.httpCLient.get<SubcategoryInterface[]>(this.subcategoryUrl);
  }

  
  getAllSubcategoriesByCategory(category: string = ''): Observable<SubcategoryInterface[]> {
    return this.httpCLient.get<SubcategoryInterface[]>(`${this.subcategoryUrl}/${category}`);
  }
}
