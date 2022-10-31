import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarThreeMonComponent } from './calendar-three-mon.component';

describe('CalendarThreeMonComponent', () => {
  let component: CalendarThreeMonComponent;
  let fixture: ComponentFixture<CalendarThreeMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarThreeMonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarThreeMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
