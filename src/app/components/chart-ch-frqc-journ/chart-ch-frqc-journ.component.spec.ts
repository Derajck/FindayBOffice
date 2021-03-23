import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChFrqcJournComponent } from './chart-ch-frqc-journ.component';

describe('ChartChFrqcJournComponent', () => {
  let component: ChartChFrqcJournComponent;
  let fixture: ComponentFixture<ChartChFrqcJournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartChFrqcJournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartChFrqcJournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
