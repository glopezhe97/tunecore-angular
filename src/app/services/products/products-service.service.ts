import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ProductInterface } from '../../shared/interfaces/products/product-interface';
import { HttpClient, HttpParams } from "@angular/common/http"; // API Calls

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private productUrl = 'http://localhost:3000/api/products'; //API URL
  private productsSubject = new BehaviorSubject<ProductInterface[]>([]); // Last array of products are most important
  public products$ = this.productsSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllProducts(term: string): Observable<ProductInterface[]> {
    let params = new HttpParams();
    if(term.length > 0){
      params = params.set('q', term); //FIlter by name
    }
    return this.httpClient.get<ProductInterface[]>(this.productUrl, { params })
      .pipe(
          tap((products) => {
            this.productsSubject.next(products);
          })
      );
  } 

  //Get all products depending on category
  getAllProductsByCategory(category: string = '', term: string): Observable<ProductInterface[]> {
    return this.getAllProducts(term).pipe(
      map(products => products.filter(product => product.category_name === category.trim())),
      tap(filteredProducts => {
        console.log('Productos filtrados por categoría:', filteredProducts);
        this.productsSubject.next(filteredProducts)})
    );
  }
}
