import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightingaleTestComponent } from './nightingale-test.component';

describe('NightingaleTestComponent', () => {
  let component: NightingaleTestComponent;
  let fixture: ComponentFixture<NightingaleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightingaleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightingaleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
