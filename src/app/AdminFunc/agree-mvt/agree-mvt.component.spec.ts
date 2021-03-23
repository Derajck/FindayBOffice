import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeMVTComponent } from './agree-mvt.component';

describe('AgreeMVTComponent', () => {
  let component: AgreeMVTComponent;
  let fixture: ComponentFixture<AgreeMVTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreeMVTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeMVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
