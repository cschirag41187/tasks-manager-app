import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGlobalComponent } from './widget-global.component';

describe('WidgetGlobalComponent', () => {
  let component: WidgetGlobalComponent;
  let fixture: ComponentFixture<WidgetGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
