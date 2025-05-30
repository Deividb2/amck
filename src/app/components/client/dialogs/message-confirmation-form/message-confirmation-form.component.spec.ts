import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConfirmationFormComponent } from './message-confirmation-form.component';

describe('MessageConfirmationFormComponent', () => {
  let component: MessageConfirmationFormComponent;
  let fixture: ComponentFixture<MessageConfirmationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageConfirmationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageConfirmationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
