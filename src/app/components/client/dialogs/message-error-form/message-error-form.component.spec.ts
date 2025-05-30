import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorFormComponent } from './message-error-form.component';

describe('MessageErrorFormComponent', () => {
  let component: MessageErrorFormComponent;
  let fixture: ComponentFixture<MessageErrorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageErrorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
