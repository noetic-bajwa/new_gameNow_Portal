import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthenticationGuard } from '../../authentication.guard';
import { ACTIONGAMES } from '../../GAMES/actionGames';
import { ADVENTUREGAMES } from '../../GAMES/adventureGames';
import { BOARDGAMES } from '../../GAMES/boardGames';
import { CARDGAMES } from '../../GAMES/cardGames';
import { EDUCATIONALGAMES } from '../../GAMES/educationalGames';
import { FAMILYGAMES } from '../../GAMES/familyGames';


import SwiperCore, {  Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);
declare let AOS: any;

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  
  ActionGames=ACTIONGAMES;
  AdventureGames=ADVENTUREGAMES;
  BoardGames=BOARDGAMES;
  CardGames = CARDGAMES;
  EducationalGames = EDUCATIONALGAMES;
  FamilyGames = FAMILYGAMES;

  
  constructor( private gamesData:DataService,private authService:AuthenticationGuard) { }

  permission = this.authService.canActivate();
  ngOnInit(): void {
    AOS.init();
    console.log(this.permission);
    // this.gamesData.getData().subscribe(
    //   data=>{
    //   this.Games=data;
    //   console.log(data)
      
    //   },
    //   err=>{
       
    //   });
      
     };
  }


