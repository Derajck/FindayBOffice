import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeOffreComponent } from './delete-type-offre.component';

describe('DeleteTypeOffreComponent', () => {
  let component: DeleteTypeOffreComponent;
  let fixture: ComponentFixture<DeleteTypeOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
