import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninGoalsComponent } from './signin-goals.component';

describe('SigninGoalsComponent', () => {
  let component: SigninGoalsComponent;
  let fixture: ComponentFixture<SigninGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
