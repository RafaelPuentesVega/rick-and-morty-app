import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlaceComponent } from './detail-place.component';

describe('DetailPlaceComponent', () => {
  let component: DetailPlaceComponent;
  let fixture: ComponentFixture<DetailPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPlaceComponent]
    });
    fixture = TestBed.createComponent(DetailPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
