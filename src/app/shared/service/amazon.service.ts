import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {
  // BASE_URL : string = environment.BASE_URL;
  // PRODUCTS_URL : string = `${this.BASE_URL}/api/products`
  // constructor(
  //    private http : HttpClient
  // ) {  }

  // GetAllProducts():Observable<any>{
  //   return  this.http.get(this.PRODUCTS_URL)
  // }
}
