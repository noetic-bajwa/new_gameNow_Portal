import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Router, CanActivate, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService:DataService , private router:Router){}
  canActivate (): boolean{
    if(this.authService.loggedIn()){
      return true;
    }else{
      // this.router.navigate(['home']);
      return false;
    }
  }
}
