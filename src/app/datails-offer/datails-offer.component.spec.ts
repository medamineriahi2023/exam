import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsOfferComponent } from './datails-offer.component';

describe('DatailsOfferComponent', () => {
  let component: DatailsOfferComponent;
  let fixture: ComponentFixture<DatailsOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
