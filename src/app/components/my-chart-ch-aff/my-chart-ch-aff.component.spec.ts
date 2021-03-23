import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartChAffComponent } from './my-chart-ch-aff.component';

describe('MyChartChAffComponent', () => {
  let component: MyChartChAffComponent;
  let fixture: ComponentFixture<MyChartChAffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChartChAffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartChAffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
