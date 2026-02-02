import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homearticles } from './homearticles';

describe('Homearticles', () => {
  let component: Homearticles;
  let fixture: ComponentFixture<Homearticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homearticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homearticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
