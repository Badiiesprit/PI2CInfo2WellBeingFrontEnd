import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogCxComponent } from './list-blog-cx.component';

describe('ListBlogCxComponent', () => {
  let component: ListBlogCxComponent;
  let fixture: ComponentFixture<ListBlogCxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBlogCxComponent]
    });
    fixture = TestBed.createComponent(ListBlogCxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
