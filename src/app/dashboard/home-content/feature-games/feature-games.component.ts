import { Component, OnInit } from '@angular/core';
import { FEATUREDGAMES } from '../../../GAMES/featuredGames';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;
declare let AOS: any;

@Component({
  selector: 'app-feature-games',
  templateUrl: './feature-games.component.html',
  styleUrls: ['./feature-games.component.css']
})
export class FeatureGamesComponent implements OnInit {


  Games=FEATUREDGAMES;
  constructor() {
    
  
   }

   customOptions: OwlOptions = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    lazyLoad:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:false,
    navSpeed: 700,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  ngOnInit(): void {
    AOS.init();
  }
  

}
