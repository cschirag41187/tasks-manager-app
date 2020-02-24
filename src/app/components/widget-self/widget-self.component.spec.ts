import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSelfComponent } from './widget-self.component';

describe('WidgetSelfComponent', () => {
  let component: WidgetSelfComponent;
  let fixture: ComponentFixture<WidgetSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
