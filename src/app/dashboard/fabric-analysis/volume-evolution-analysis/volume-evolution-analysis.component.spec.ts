import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeEvolutionAnalysisComponent } from './volume-evolution-analysis.component';

describe('VolumeEvolutionAnalysisComponent', () => {
  let component: VolumeEvolutionAnalysisComponent;
  let fixture: ComponentFixture<VolumeEvolutionAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeEvolutionAnalysisComponent]
    });
    fixture = TestBed.createComponent(VolumeEvolutionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
