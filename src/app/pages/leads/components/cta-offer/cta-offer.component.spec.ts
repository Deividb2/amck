import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaOfferComponent } from './cta-offer.component';

describe('CtaOfferComponent', () => {
  let component: CtaOfferComponent;
  let fixture: ComponentFixture<CtaOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
