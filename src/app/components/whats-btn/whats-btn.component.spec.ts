import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsBtnComponent } from './whats-btn.component';

describe('WhatsBtnComponent', () => {
  let component: WhatsBtnComponent;
  let fixture: ComponentFixture<WhatsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
