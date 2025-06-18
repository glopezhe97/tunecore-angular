import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductInterface } from '../../product/interface/product-interface';
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
            console.log(products);
          })
      );
  } 
}
