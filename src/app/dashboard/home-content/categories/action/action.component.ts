import { Component, OnInit } from '@angular/core';
import { ACTIONGAMES } from '../../../../GAMES/actionGames';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  Games=ACTIONGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
