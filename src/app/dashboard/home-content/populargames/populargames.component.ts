import { Component, OnInit } from '@angular/core';
import { POPULARGAMES } from '../../../GAMES/popularGames';

@Component({
  selector: 'app-populargames',
  templateUrl: './populargames.component.html',
  styleUrls: ['./populargames.component.css']
})
export class PopulargamesComponent implements OnInit {
  Games=POPULARGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
