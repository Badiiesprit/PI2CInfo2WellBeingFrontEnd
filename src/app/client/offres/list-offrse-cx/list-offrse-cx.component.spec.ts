import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffrseCxComponent } from './list-offrse-cx.component';

describe('ListOffrseCxComponent', () => {
  let component: ListOffrseCxComponent;
  let fixture: ComponentFixture<ListOffrseCxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOffrseCxComponent]
    });
    fixture = TestBed.createComponent(ListOffrseCxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
