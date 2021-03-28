import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;

  constructor( private http: HttpClient ) {
    this.url = 'http://localhost:3000/products';
  }
  getJSONProduct(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.url);
  }
  postJSONProduct(objProduct: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.url, objProduct);
  }
  deleteJSONProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}/${id}`);
  }
  updateJSONProduct(objProduct: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}/${objProduct.id}`, objProduct);
  }
}
