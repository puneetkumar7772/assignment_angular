import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricAnalysisComponent } from './fabric-analysis.component';

describe('FabricAnalysisComponent', () => {
  let component: FabricAnalysisComponent;
  let fixture: ComponentFixture<FabricAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabricAnalysisComponent]
    });
    fixture = TestBed.createComponent(FabricAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
