import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedgamesComponent } from './recommendedgames.component';

describe('RecommendedgamesComponent', () => {
  let component: RecommendedgamesComponent;
  let fixture: ComponentFixture<RecommendedgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
