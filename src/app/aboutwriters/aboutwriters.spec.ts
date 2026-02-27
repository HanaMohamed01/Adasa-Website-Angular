import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutwriters } from './aboutwriters';

describe('Aboutwriters', () => {
  let component: Aboutwriters;
  let fixture: ComponentFixture<Aboutwriters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutwriters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutwriters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
