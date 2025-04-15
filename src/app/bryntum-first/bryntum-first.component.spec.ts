import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BryntumFirstComponent } from './bryntum-first.component';

describe('BryntumFirstComponent', () => {
  let component: BryntumFirstComponent;
  let fixture: ComponentFixture<BryntumFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BryntumFirstComponent]
    });
    fixture = TestBed.createComponent(BryntumFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
