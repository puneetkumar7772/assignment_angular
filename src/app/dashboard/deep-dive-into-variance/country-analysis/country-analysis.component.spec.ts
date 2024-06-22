import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAnalysisComponent } from './country-analysis.component';

describe('CountryAnalysisComponent', () => {
  let component: CountryAnalysisComponent;
  let fixture: ComponentFixture<CountryAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryAnalysisComponent]
    });
    fixture = TestBed.createComponent(CountryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
