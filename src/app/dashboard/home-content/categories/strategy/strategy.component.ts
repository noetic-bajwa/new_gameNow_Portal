import { Component, OnInit } from '@angular/core';
import { STRATEGYGAMES } from '../../../../GAMES/strategyGames';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  Games=STRATEGYGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
