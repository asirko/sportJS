import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesListComponent } from './exercices-list.component';

describe('ExercicesListComponent', () => {
  let component: ExercicesListComponent;
  let fixture: ComponentFixture<ExercicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
