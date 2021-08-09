import { Component, OnInit } from '@angular/core';
import { CARDGAMES } from '../../../../GAMES/cardGames';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Games=CARDGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
