import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALLGAMES } from 'src/app/GAMES/allGames';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  gameId:any;
  AllGames=ALLGAMES;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.gameId = (params.get('gameId'));
      
    })
   }

  ngOnInit(): void {
  }

}
