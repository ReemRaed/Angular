import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCursorComponent } from './image-cursor.component';

describe('ImageCursorComponent', () => {
  let component: ImageCursorComponent;
  let fixture: ComponentFixture<ImageCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
