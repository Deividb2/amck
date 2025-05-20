import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFormPopupMessageConfirmationComponent } from './budget-form-popup-message-confirmation.component';

describe('BudgetFormPopupMessageConfirmationComponent', () => {
  let component: BudgetFormPopupMessageConfirmationComponent;
  let fixture: ComponentFixture<BudgetFormPopupMessageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetFormPopupMessageConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetFormPopupMessageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
