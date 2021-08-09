import { Component, OnInit } from '@angular/core';
import { BOARDGAMES } from '../../../../GAMES/boardGames';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  Games=BOARDGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
