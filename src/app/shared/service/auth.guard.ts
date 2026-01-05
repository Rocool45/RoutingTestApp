import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable(
    {
        providedIn:"root"

    }
)
export class AuthGuard implements CanActivate{
    
    private routes = inject(Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(localStorage.getItem("token")){
            return true
        }else{
          return this.routes.createUrlTree([""])
        }
       
    }

}