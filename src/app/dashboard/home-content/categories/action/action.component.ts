import { Component, OnInit } from '@angular/core';
import { ACTIONGAMES } from '../../../../GAMES/actionGames';


import SwiperCore, {  Autoplay, EffectCoverflow,EffectCube,EffectFlip, Pagination } from "swiper/core";

SwiperCore.use([Autoplay,EffectCube,EffectCoverflow,EffectFlip, Pagination]);
declare let AOS: any;

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  Games=ACTIONGAMES;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
