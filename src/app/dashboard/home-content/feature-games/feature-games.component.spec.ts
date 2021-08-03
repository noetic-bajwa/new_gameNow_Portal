import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGamesComponent } from './feature-games.component';

describe('FeatureGamesComponent', () => {
  let component: FeatureGamesComponent;
  let fixture: ComponentFixture<FeatureGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
