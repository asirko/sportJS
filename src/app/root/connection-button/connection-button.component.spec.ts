import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionButtonComponent } from './connection-button.component';

describe('ConnectionButtonComponent', () => {
  let component: ConnectionButtonComponent;
  let fixture: ComponentFixture<ConnectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
