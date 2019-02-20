import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public url = 'http://localhost/angular-php/backend/';

  constructor(private http: HttpClient) { }

  // loggedIn(){
  //   return !!localStorage.getItem('token');
  // }

  login(data){
    return this.http.post(this.url + 'admin-login.php', data);
  }

  addProduct(data){
    return this.http.post(this.url + 'addproduct.php', data);
  }

  getproductData(){
    return this.http.get(this.url + 'getAllProduct.php');
  }

  deleteProductData(id){
    return this.http.get(this.url + 'deleteproduct.php?id=' + id);
  }

  createCategory(data){
    return this.http.post(this.url + 'product-category.php', data);
  }

  getCategorys(){
    return this.http.get(this.url + 'get-product-category.php');
  }

  getCategorysById(id){
    return this.http.get(this.url + 'get-productbyId.php?id=' + id);
  }

  deleteCategory(id){
    return this.http.get(this.url + 'delete-product-category.php?id=' + id);
  }

  updateProduct(data){
    // console.log(data);
    return this.http.post(this.url + 'update-product-category.php', data);
  }
  
  updateStatusById(id){
    return this.http.get(this.url + 'change-status.php?id=' + id);
  }
}
