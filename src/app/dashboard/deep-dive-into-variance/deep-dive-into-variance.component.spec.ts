import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepDiveIntoVarianceComponent } from './deep-dive-into-variance.component';

describe('DeepDiveIntoVarianceComponent', () => {
  let component: DeepDiveIntoVarianceComponent;
  let fixture: ComponentFixture<DeepDiveIntoVarianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepDiveIntoVarianceComponent]
    });
    fixture = TestBed.createComponent(DeepDiveIntoVarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
