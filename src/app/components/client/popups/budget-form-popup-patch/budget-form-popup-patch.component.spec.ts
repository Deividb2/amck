import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFormPopupPatchComponent } from './budget-form-popup-patch.component';

describe('BudgetFormPopupPatchComponent', () => {
  let component: BudgetFormPopupPatchComponent;
  let fixture: ComponentFixture<BudgetFormPopupPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetFormPopupPatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetFormPopupPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
