import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   BaseUrl="http://localhost:8001"

   searchString=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  // api to get all products
  getProducts(searchData:any){
   return this.http.get(`${this.BaseUrl}/get-all-products?search=${searchData}`)
  }

  getProduct(id:any){
   return this.http.get(`${this.BaseUrl}/get-product/${id}`)
  }

  signup(bodyData:any){
    return this.http.post(`${this.BaseUrl}/add-new-user`,bodyData)
  }

  signIn(bodyData:any){
    return this.http.post(`${this.BaseUrl}/login`,bodyData) 
  }
  addtoWishlist(bodyData:any){
    return this.http.post(`${this.BaseUrl}/user/add-to-wishlist`,bodyData) 
  }

  getWishlist(userId:any){
    return this.http.get(`${this.BaseUrl}/user/get-wishlist/${userId}`)
  }
}

