import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutheader } from './aboutheader';

describe('Aboutheader', () => {
  let component: Aboutheader;
  let fixture: ComponentFixture<Aboutheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
