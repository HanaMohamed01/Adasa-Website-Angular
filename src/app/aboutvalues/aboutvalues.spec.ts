import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutvalues } from './aboutvalues';

describe('Aboutvalues', () => {
  let component: Aboutvalues;
  let fixture: ComponentFixture<Aboutvalues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutvalues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutvalues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
