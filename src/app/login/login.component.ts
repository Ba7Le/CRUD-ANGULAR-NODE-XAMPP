import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  addItem() {
    const newItem = { username: 'tientienti', password: '123', role: 'dev' };
    this.http.post('http://localhost:3000/users', newItem).subscribe(
      () => {
        this.getItems();
      },
      (error) => {
        console.error('Error creating item:', error);
      }
    );
  }

  editItem(userId: number) {
    const userUpdate = { username: 'updateUser', password: '123', role: 'user' };
    this.http.put(`http://localhost:3000/users/${userId}`, userUpdate).subscribe(
      () => {
        this.getItems();
      },
      (error) => {
        console.error('Error updating item:', error);
      }
    );
  }

  deleteItem(userId: number) {
    this.http.delete(`http://localhost:3000/users/${userId}`).subscribe(
      () => {
        this.getItems();
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
