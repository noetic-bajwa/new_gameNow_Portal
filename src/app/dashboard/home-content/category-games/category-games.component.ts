import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { AuthenticationGuard } from '../../../authentication.guard';


import { ALLGAMES } from 'src/app/GAMES/allGames';

import SwiperCore, {Lazy,Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Lazy, Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);

declare let AOS: any;

@Component({
  selector: 'app-category-games',
  templateUrl: './category-games.component.html',
  styleUrls: ['./category-games.component.css']
})
export class CategoryGamesComponent implements OnInit {

  @Input() category='';
@Input() icon='bookmark';
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
