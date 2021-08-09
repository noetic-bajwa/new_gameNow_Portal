import { Component, OnInit } from '@angular/core';
import { MEMORYGAMES } from '../../../../GAMES/memoryGames';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  Games=MEMORYGAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
