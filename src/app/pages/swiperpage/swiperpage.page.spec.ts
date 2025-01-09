import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperpagePage } from './swiperpage.page';

describe('SwiperpagePage', () => {
  let component: SwiperpagePage;
  let fixture: ComponentFixture<SwiperpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
