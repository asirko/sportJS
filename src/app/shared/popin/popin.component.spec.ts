import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinComponent } from './popin.component';

describe('PopinComponent', () => {
  let component: PopinComponent;
  let fixture: ComponentFixture<PopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
