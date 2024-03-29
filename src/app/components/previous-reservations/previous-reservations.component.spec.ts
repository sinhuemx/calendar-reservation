import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousReservationsComponent } from './previous-reservations.component';

describe('PreviousReservationsComponent', () => {
  let component: PreviousReservationsComponent;
  let fixture: ComponentFixture<PreviousReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
