import { Component, OnInit } from '@angular/core';
import { WORDGAMES } from '../../../../GAMES/wordGames';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  Games=WORDGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
