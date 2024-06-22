import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPriceAnalysisComponent } from './land-price-analysis.component';

describe('LandPriceAnalysisComponent', () => {
  let component: LandPriceAnalysisComponent;
  let fixture: ComponentFixture<LandPriceAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandPriceAnalysisComponent]
    });
    fixture = TestBed.createComponent(LandPriceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
