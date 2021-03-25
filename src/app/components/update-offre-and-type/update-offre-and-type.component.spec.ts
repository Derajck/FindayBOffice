import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffreAndTypeComponent } from './update-offre-and-type.component';

describe('UpdateOffreAndTypeComponent', () => {
  let component: UpdateOffreAndTypeComponent;
  let fixture: ComponentFixture<UpdateOffreAndTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOffreAndTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOffreAndTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
