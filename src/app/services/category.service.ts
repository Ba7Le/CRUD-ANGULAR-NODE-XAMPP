import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(data: any) {
    return this.http.post(this.url + `/category/add`, data);
  }

  update(data: any) {
    return this.http.patch(this.url + `/category/update`, data);
  }

  getAll() {
    return this.http.get(this.url + `/category/get`);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/category/delete/${id}`);
  }

}
