import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFabricComponent } from './all-fabric.component';

describe('AllFabricComponent', () => {
  let component: AllFabricComponent;
  let fixture: ComponentFixture<AllFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFabricComponent]
    });
    fixture = TestBed.createComponent(AllFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
