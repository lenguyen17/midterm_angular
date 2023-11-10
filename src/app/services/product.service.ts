import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  HOST:string = "https://fakestoreapi.com"

  constructor(private https:HttpClient) { }

  getListProduct() {
    return new Promise((res,rej) => {
      this.https.get(this.HOST+'/products').subscribe(rs=> res(rs))
    })
  }
  getProductbyId(id:number) {
    return new Promise((res,rej) => {
      this.https.get(this.HOST+'/products/'+id).subscribe(rs=> res(rs))
    })
  }
  getCategory() {
    return new Promise((res, rej) => {
      this.https.get(this.HOST +'/products/categories').subscribe(rs => res(rs))
    })
  }

  createProduct(body:any) {
    return new Promise((res, rej) => {
      this.https.post(this.HOST+'/products', JSON.stringify(body))
      .subscribe(rs => res(rs))
    })
  }
  updateProduct(body:any, id:any) {
    return new Promise((res, rej) => {
      this.https.put(this.HOST+'/products/'+id, JSON.stringify(body))
      .subscribe(rs => res(rs))
    })
  }
  deleteProduct(id:any) {
    return new Promise((res, rej) => {
      this.https.delete(this.HOST+'/products/'+id).subscribe(rs => res(rs))
    })
  }
}
