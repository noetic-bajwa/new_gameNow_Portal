import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALLGAMES } from 'src/app/GAMES/allGames';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  gameId:any;
  
  AllGames=ALLGAMES;
  constructor(private route: ActivatedRoute,public sanitizer: DomSanitizer) {
    this.route.paramMap.subscribe(params => {
      this.gameId = (params.get('gameId'));
      
    })
   }

  ngOnInit(): void {
    
    
  }
  urlSafe(src:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
