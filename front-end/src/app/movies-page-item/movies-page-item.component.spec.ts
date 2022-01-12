import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPageItemComponent } from './movies-page-item.component';

describe('MoviesPageItemComponent', () => {
  let component: MoviesPageItemComponent;
  let fixture: ComponentFixture<MoviesPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
