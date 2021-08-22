import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { AuthenticationGuard } from '../../../authentication.guard';


import { ALLGAMES } from 'src/app/GAMES/allGames';

import SwiperCore, {Lazy, Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Lazy, Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);

declare let AOS: any;

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.css']
})
export class GameTemplateComponent implements OnInit {
@Input() category='';
@Input() icon='';
@Input() title=''
AllGames:any;

  
  
  constructor( private gamesData:DataService,private authService:AuthenticationGuard) { 
    // this.AllGames = ALLGAMES.filter(word => word.genres.includes(this.category)).slice(0,2);
    // console.log(this.AllGames[0].genres)
     
    // console.log(this.Games)

    
  }
  
  permission = this.authService.canActivate();
  ngOnInit(): void {
    this.AllGames=ALLGAMES.filter(word => word.genres.includes(this.category)).slice(0,5);
    // this.AllGames=this.gamesData.getGames();
    // console.log(this.AllGames);
    // console.log(this.AllGames)
    AOS.init();
    // console.log(this.permission);
    // this.gamesData.getData().subscribe(
    //   data=>{
    //   this.Games=data;
    //   console.log(data) 
    //   },
    //   err=>{  
    //   });
     };

    //  onClick(id:any){
    //    alert(id)
    //  }

     
}
