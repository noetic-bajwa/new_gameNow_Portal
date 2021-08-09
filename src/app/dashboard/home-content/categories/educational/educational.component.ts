import { Component, OnInit } from '@angular/core';
import { EDUCATIONALGAMES } from '../../../../GAMES/educationalGames';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {
  Games=EDUCATIONALGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
