import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharacterComponent } from './detail-character.component';

describe('DetailCharacterComponent', () => {
  let component: DetailCharacterComponent;
  let fixture: ComponentFixture<DetailCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCharacterComponent]
    });
    fixture = TestBed.createComponent(DetailCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
