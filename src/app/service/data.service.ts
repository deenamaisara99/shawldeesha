import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_API = "http://localhost:8888"

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(`${this.BASE_API}/products`);
  }

  getProductByID(id): Observable<any> {
    return this.httpClient.get(`${this.BASE_API}/products/${id}`);
  }

  buyProduct(data): Observable<any> {
    return this.httpClient.post(`${this.BASE_API}/order/add`, data)
  }
}
