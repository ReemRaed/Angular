import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveActionBarComponent } from './add-remove-action-bar.component';

describe('AddRemoveActionBarComponent', () => {
  let component: AddRemoveActionBarComponent;
  let fixture: ComponentFixture<AddRemoveActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveActionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
