import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISales } from '../../interfaces/sales.interface';

@Injectable({
  providedIn: 'root'
})

export class SalesService {
private url = environment.url;

private arrData: Array<string> = [
  'Ivan',
  'Petro',
  'Oleg'
];


  constructor(
    private http: HttpClient
  ) {
    this.url += 'sales';
   }
  getData(): Array<string>{
    return this.arrData;
  }

  getSales(): Observable<ISales[]>{
  return this.http.get<ISales[]>(this.url);
  }

  getOneSales(id: number): Observable<ISales>{
    return this.http.get<ISales>(`${this.url}/${id}`);
    }

  addSales(sale: ISales): Observable<ISales>{
    return this.http.post<ISales>(this.url, sale);
  }

  updateSales(sale: ISales): Observable<ISales>{
    return this.http.put<ISales>(`${this.url}/${sale.id}`, sale);
  }

  deleteSales(sale: ISales): Observable<ISales>{
    return this.http.delete<ISales>(`${this.url}/${sale.id}`);
  }
}
