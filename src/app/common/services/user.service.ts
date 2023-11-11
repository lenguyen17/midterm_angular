import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  HOST: string = 'https://fakestoreapi.com';
  TOKEN: string = '';
  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): any {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.HOST + '/auth/login', { username, password })
        .subscribe((res: any) => {
          if (res.token) {
            this.TOKEN = res.token;
            this.saveLocal();
          }
          resolve(res);
        })
    })
  }

  logout(): void {
    this.TOKEN = '';
    localStorage.removeItem('angular-token');
  }

  register(user: User) {
    return fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Đăng ký thất bại:', error);
        throw new Error('Có lỗi xảy ra khi đăng ký người dùng');
      });

      
  }

  isLoggedIn() {
    this.readLocal();
    return this.TOKEN !== '';
  }

  readLocal() {
    try {
      let str = localStorage.getItem("angular-token");
      if (str != null && str.length > 0) {
        this.TOKEN = JSON.parse(str);
      }
    } catch (error) {
      console.log(error);
      this.TOKEN = '';
    }
  }

  saveLocal() {
    localStorage.setItem("angular-token", JSON.stringify(this.TOKEN));
  }
}
