import { Component, OnInit } from '@angular/core';
import { LEADERBOARDGAMES } from '../../../GAMES/leaderBoardGames';
// import SwiperCore from 'swiper/core';
import SwiperCore, {  Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);
declare let AOS: any;


@Component({
  selector: 'app-leader-board-games',
  templateUrl: './leader-board-games.component.html',
  styleUrls: ['./leader-board-games.component.css']
})
export class LeaderBoardGamesComponent implements OnInit {
  Games=LEADERBOARDGAMES;
  constructor() {
  
  }

  ngOnInit(): void {
    AOS.init();
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  
  

}

