import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBashbaordComponent } from './user-bashbaord.component';

describe('UserBashbaordComponent', () => {
  let component: UserBashbaordComponent;
  let fixture: ComponentFixture<UserBashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
