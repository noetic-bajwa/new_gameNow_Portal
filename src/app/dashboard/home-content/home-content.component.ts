import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthenticationGuard } from '../../authentication.guard';

import { ACTIONGAMES } from '../../GAMES/actionGames';
import { FEATUREDGAMES } from '../../GAMES/featuredGames';
import { LEADERBOARDGAMES } from '../../GAMES/leaderBoardGames';
import { ADVENTUREGAMES } from '../../GAMES/adventureGames';
import { BOARDGAMES } from '../../GAMES/boardGames';
import { CARDGAMES } from '../../GAMES/cardGames';
import { EDUCATIONALGAMES } from '../../GAMES/educationalGames';
import { FAMILYGAMES } from '../../GAMES/familyGames';
import { SPORTSGAMES } from '../../GAMES/sportsGames';
import { STRATEGYGAMES } from '../../GAMES/strategyGames';
import { WORDGAMES } from '../../GAMES/wordGames';
import { MEMORYGAMES } from '../../GAMES/memoryGames';
import { MULTIPLAYERGAMES } from '../../GAMES/multiplayerGames';
import { PUZZLEGAMES } from '../../GAMES/puzzleGames';
import { POPULARGAMES } from '../../GAMES/popularGames';
import { RECOMMENDEDGAMES } from '../../GAMES/recommendedGames';

import SwiperCore, {Lazy,  Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Lazy, Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);

declare let AOS: any;

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  FeaturedGames = FEATUREDGAMES;
  LeaderBoardGames = LEADERBOARDGAMES;
  
  ActionGames=ACTIONGAMES;
  AdventureGames=ADVENTUREGAMES;
  BoardGames=BOARDGAMES;
  CardGames = CARDGAMES;
  EducationalGames = EDUCATIONALGAMES;
  FamilyGames = FAMILYGAMES;
  SportsGames = SPORTSGAMES;
  StrategyGames = STRATEGYGAMES;
  WordGames = WORDGAMES;
  MemoryGames = MEMORYGAMES;
  MultiplayerGames = MULTIPLAYERGAMES;
  PuzzleGames = PUZZLEGAMES;
  PopularGames = PUZZLEGAMES;
  RecommendedGames = RECOMMENDEDGAMES;
  
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


