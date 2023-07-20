import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(data: any) {
    return this.http.post(this.url + `/product/add`, data);
  }

  update(data: any) {
    return this.http.patch(this.url + `/product/update`, data);
  }

  getAllProducts() {
    return this.http.get(this.url + `/product/get`);
  }

  updateStatus(data: any) {
    return this.http.patch(this.url + `/product/updateStatus`, data);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/product/delete/${id}`);
  }

  getProductsByCategory(id: number) {
    return this.http.get(this.url + `/product/getByCategory/${id}`);
  }

  getById(id: number) {
    return this.http.get(this.url + `/product/getById/${id}`);
  }

}
