import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGanttComponent } from './third-gantt.component';

describe('ThirdGanttComponent', () => {
  let component: ThirdGanttComponent;
  let fixture: ComponentFixture<ThirdGanttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdGanttComponent]
    });
    fixture = TestBed.createComponent(ThirdGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
