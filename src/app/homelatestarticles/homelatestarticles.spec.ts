import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homelatestarticles } from './homelatestarticles';

describe('Homelatestarticles', () => {
  let component: Homelatestarticles;
  let fixture: ComponentFixture<Homelatestarticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homelatestarticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homelatestarticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
