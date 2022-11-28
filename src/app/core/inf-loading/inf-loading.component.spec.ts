import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfLoadingComponent } from './inf-loading.component';

describe('InfLoadingComponent', () => {
  let component: InfLoadingComponent;
  let fixture: ComponentFixture<InfLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
