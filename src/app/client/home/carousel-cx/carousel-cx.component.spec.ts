import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCxComponent } from './carousel-cx.component';

describe('CarouselCxComponent', () => {
  let component: CarouselCxComponent;
  let fixture: ComponentFixture<CarouselCxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselCxComponent]
    });
    fixture = TestBed.createComponent(CarouselCxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
