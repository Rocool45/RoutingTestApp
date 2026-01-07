import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SnackbarService } from "./snackbar.service";

@Injectable({
    providedIn:"root"
})
export class UserRoleGuard implements CanActivate{
    private router = inject(Router)
    private sncakbar =inject(SnackbarService)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let userROle :Array<string> =   route.data["userRole"]

     let Loginedin:string = localStorage.getItem("userRole")!

     if(userROle.includes(Loginedin)){
         return userROle.includes(Loginedin)

     }else{
      
        return this.router.createUrlTree([""])
     }

    }
}