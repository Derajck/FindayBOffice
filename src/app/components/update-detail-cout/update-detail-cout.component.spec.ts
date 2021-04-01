import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailCoutComponent } from './update-detail-cout.component';

describe('UpdateDetailCoutComponent', () => {
  let component: UpdateDetailCoutComponent;
  let fixture: ComponentFixture<UpdateDetailCoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailCoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailCoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
