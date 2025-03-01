import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesComponent } from './stages.component';

describe('StagesComponent', () => {
  let component: StagesComponent;
  let fixture: ComponentFixture<StagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
