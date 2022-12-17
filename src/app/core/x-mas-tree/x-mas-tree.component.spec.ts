import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XMasTreeComponent } from './x-mas-tree.component';

describe('XMasTreeComponent', () => {
  let component: XMasTreeComponent;
  let fixture: ComponentFixture<XMasTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XMasTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XMasTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
