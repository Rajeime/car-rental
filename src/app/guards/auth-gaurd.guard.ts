import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {

  constructor(private _router:Router ) {      
  }   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    alert('You are not allowed to view this page. You are redirected to Home Page'); 
     this._router.navigate(["home"]);             
     return false;  
  }
  
}
