import { Component, OnInit } from '@angular/core';
import { MULTIPLAYERGAMES } from '../../../../GAMES/multiplayerGames';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {
  Games=MULTIPLAYERGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
