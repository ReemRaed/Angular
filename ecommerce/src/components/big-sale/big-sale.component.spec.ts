import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSaleComponent } from './big-sale.component';

describe('BigSaleComponent', () => {
  let component: BigSaleComponent;
  let fixture: ComponentFixture<BigSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
