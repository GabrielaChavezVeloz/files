import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCardComponent } from './students-card.component';

describe('StudentsCardComponent', () => {
  let component: StudentsCardComponent;
  let fixture: ComponentFixture<StudentsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsCardComponent]
    });
    fixture = TestBed.createComponent(StudentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
