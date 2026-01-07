import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthRiasedComponent } from './not-auth-riased.component';

describe('NotAuthRiasedComponent', () => {
  let component: NotAuthRiasedComponent;
  let fixture: ComponentFixture<NotAuthRiasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthRiasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthRiasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
