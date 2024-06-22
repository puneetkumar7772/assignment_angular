import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadtimeAnalysisComponent } from './leadtime-analysis.component';

describe('LeadtimeAnalysisComponent', () => {
  let component: LeadtimeAnalysisComponent;
  let fixture: ComponentFixture<LeadtimeAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadtimeAnalysisComponent]
    });
    fixture = TestBed.createComponent(LeadtimeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
