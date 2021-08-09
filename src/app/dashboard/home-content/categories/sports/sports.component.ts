import { Component, OnInit } from '@angular/core';
import { SPORTSGAMES } from '../../../../GAMES/sportsGames';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  Games=SPORTSGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
