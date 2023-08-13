import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEpisodeComponent } from './detail-episode.component';

describe('DetailEpisodeComponent', () => {
  let component: DetailEpisodeComponent;
  let fixture: ComponentFixture<DetailEpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEpisodeComponent]
    });
    fixture = TestBed.createComponent(DetailEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
