import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatedFabricsComponent } from './nominated-fabrics.component';

describe('NominatedFabricsComponent', () => {
  let component: NominatedFabricsComponent;
  let fixture: ComponentFixture<NominatedFabricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NominatedFabricsComponent]
    });
    fixture = TestBed.createComponent(NominatedFabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
