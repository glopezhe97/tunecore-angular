import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeInterface } from '../../shared/interfaces/type/type-interface';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {
  private urlType = 'http://localhost:3000/api/type';
  constructor(private httpCLient: HttpClient) { }

  getAllTypesBySubcategory(subcategory: string): Observable<TypeInterface[]> {
    const param = subcategory;
    return this.httpCLient.get<TypeInterface[]>(`${this.urlType}/${subcategory}`);
  }
}
