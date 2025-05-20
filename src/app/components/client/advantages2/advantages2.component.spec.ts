import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advantages2Component } from './advantages2.component';

describe('Advantages2Component', () => {
  let component: Advantages2Component;
  let fixture: ComponentFixture<Advantages2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advantages2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advantages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
