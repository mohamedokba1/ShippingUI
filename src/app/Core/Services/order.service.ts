import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  URL: string = 'http://localhost:5250/api/Order';
  constructor(private http: HttpClient) {}
  getAllOrders(): any {
    return this.http.get(this.URL);
  }
}
