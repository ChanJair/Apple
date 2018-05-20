import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionChanComponent } from './seccion-chan.component';

describe('SeccionChanComponent', () => {
  let component: SeccionChanComponent;
  let fixture: ComponentFixture<SeccionChanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionChanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionChanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
