import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepoComponent } from './new-repo.component';

describe('NewRepoComponent', () => {
  let component: NewRepoComponent;
  let fixture: ComponentFixture<NewRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRepoComponent]
    });
    fixture = TestBed.createComponent(NewRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
