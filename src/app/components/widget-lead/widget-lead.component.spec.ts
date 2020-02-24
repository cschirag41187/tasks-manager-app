import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLeadComponent } from './widget-lead.component';

describe('WidgetLeadComponent', () => {
  let component: WidgetLeadComponent;
  let fixture: ComponentFixture<WidgetLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
