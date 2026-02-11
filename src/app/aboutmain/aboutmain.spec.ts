import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutmain } from './aboutmain';

describe('Aboutmain', () => {
  let component: Aboutmain;
  let fixture: ComponentFixture<Aboutmain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutmain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutmain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
