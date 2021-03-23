import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChAffJournComponent } from './chart-ch-aff-journ.component';

describe('ChartChAffJournComponent', () => {
  let component: ChartChAffJournComponent;
  let fixture: ComponentFixture<ChartChAffJournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartChAffJournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartChAffJournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
