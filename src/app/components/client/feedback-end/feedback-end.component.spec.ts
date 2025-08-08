import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackEndComponent } from './feedback-end.component';

describe('FeedbackEndComponent', () => {
  let component: FeedbackEndComponent;
  let fixture: ComponentFixture<FeedbackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
