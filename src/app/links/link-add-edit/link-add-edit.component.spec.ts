import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAddEditComponent } from './link-add-edit.component';

describe('LinkAddEditComponent', () => {
  let component: LinkAddEditComponent;
  let fixture: ComponentFixture<LinkAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
