import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlprGamesComponent } from './flpr-games.component';

describe('FlprGamesComponent', () => {
  let component: FlprGamesComponent;
  let fixture: ComponentFixture<FlprGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlprGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlprGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
