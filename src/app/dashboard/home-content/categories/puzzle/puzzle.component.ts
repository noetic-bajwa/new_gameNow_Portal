import { Component, OnInit } from '@angular/core';
import { PUZZLEGAMES } from '../../../../GAMES/puzzleGames';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  Games=PUZZLEGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
