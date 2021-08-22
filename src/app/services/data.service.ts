import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { ALLGAMES } from 'src/app/GAMES/allGames';
import { Observable,Subject } from 'rxjs';


const httpOptions = {
  withCredentials: false,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  // gameData = new Subject()
  getGames(){
    return ALLGAMES.filter(word => word.genres.includes('Feature'));
  }

  getData(){
    let url="https://subscription.marketjs.com/api/portal_game/list/json/400";
    return this.http.get(url);
    }

    loggedIn(){
      return(this.cookieService.get('token'));   
      
    }
}
