import { Component, OnInit } from '@angular/core';
import { FAMILYGAMES } from '../../../../GAMES/familyGames';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  Games=FAMILYGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
