import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsByProjectsComponent } from './students-by-projects.component';

describe('StudentsByProjectsComponent', () => {
  let component: StudentsByProjectsComponent;
  let fixture: ComponentFixture<StudentsByProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsByProjectsComponent]
    });
    fixture = TestBed.createComponent(StudentsByProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
