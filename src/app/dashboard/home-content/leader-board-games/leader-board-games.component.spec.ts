import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardGamesComponent } from './leader-board-games.component';

describe('LeaderBoardGamesComponent', () => {
  let component: LeaderBoardGamesComponent;
  let fixture: ComponentFixture<LeaderBoardGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderBoardGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
