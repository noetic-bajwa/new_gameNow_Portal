import { Component, OnInit } from '@angular/core';
import { ADVENTUREGAMES } from '../../../../GAMES/adventureGames';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  Games=ADVENTUREGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
