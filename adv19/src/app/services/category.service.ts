import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string;
  modalAddEdit = false;
  add = true;
  nameCategory = '';
  editIndex: string;

  constructor( private http: HttpClient ) {
    this.url = 'http://localhost:3000/category';
  }
  getJSONCategory(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.url);
  }
  postJSONCategory(objCategory: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.url, objCategory);
  }
  deleteJSONCategory(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.url}/${id}`);
  }
  updateJSONCategory(objCategory: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.url}/${objCategory.id}`, objCategory);
  }
}
