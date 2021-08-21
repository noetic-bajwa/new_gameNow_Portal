import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { AuthenticationGuard } from '../../../authentication.guard';


import { ALLGAMES } from 'src/app/GAMES/allGames';

import SwiperCore, {Lazy,  Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Lazy, Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);

declare let AOS: any;

@Component({
  selector: 'app-flpr-games',
  templateUrl: './flpr-games.component.html',
  styleUrls: ['./flpr-games.component.css']
})
export class FlprGamesComponent implements OnInit {
@Input() category='';
@Input() icon='';
@Input() title=''
  AllGames = ALLGAMES;
  
  constructor( private gamesData:DataService,private authService:AuthenticationGuard) { 
    // console.log(this.AllGames[0].genres)
  }

  permission = this.authService.canActivate();
  ngOnInit(): void {
    // console.log(this.AllGames)
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

    //  onClick(id:any){
    //    alert(id)
    //  }

     
}
