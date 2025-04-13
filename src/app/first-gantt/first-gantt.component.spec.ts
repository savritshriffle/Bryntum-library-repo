import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGanttComponent } from './first-gantt.component';

describe('FirstGanttComponent', () => {
  let component: FirstGanttComponent;
  let fixture: ComponentFixture<FirstGanttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstGanttComponent]
    });
    fixture = TestBed.createComponent(FirstGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
