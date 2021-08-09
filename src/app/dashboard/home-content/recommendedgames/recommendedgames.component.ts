import { Component, OnInit } from '@angular/core';
import { RECOMMENDEDGAMES } from '../../../GAMES/recommendedGames';

@Component({
  selector: 'app-recommendedgames',
  templateUrl: './recommendedgames.component.html',
  styleUrls: ['./recommendedgames.component.css']
})
export class RecommendedgamesComponent implements OnInit {
  Games=RECOMMENDEDGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
