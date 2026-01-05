import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin, Iregister } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url :string ="https://auth-git-main-iamrkjs-projects.vercel.app"

  constructor(private http:HttpClient) { }

  login(obj:Ilogin):Observable<any>{
 return this.http.post<any>(`${this.base_url}/api/auth/login`,obj)
  }

 signup(userData: Iregister): Observable<any> {
    return this.http.post(
      `${this.base_url}/api/auth/register`,
      userData
    );
  }

  setToken(token:string){
    localStorage.setItem("token",token)
  }
  setUserRole(userRole:string){
    localStorage.setItem("userRole",userRole)
  }

  getToken(){
  return  localStorage.getItem("token")!
  }
  getUserRole(){
   return localStorage.getItem("userRole")!
  }

}
