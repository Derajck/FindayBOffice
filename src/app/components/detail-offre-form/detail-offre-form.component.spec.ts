import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOffreFormComponent } from './detail-offre-form.component';

describe('DetailOffreFormComponent', () => {
  let component: DetailOffreFormComponent;
  let fixture: ComponentFixture<DetailOffreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOffreFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOffreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
