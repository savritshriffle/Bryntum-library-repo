import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecandGanttComponent } from './secand-gantt.component';

describe('SecandGanttComponent', () => {
  let component: SecandGanttComponent;
  let fixture: ComponentFixture<SecandGanttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecandGanttComponent]
    });
    fixture = TestBed.createComponent(SecandGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
