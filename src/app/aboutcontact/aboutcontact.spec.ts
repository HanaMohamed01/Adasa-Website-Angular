import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcontact } from './aboutcontact';

describe('Aboutcontact', () => {
  let component: Aboutcontact;
  let fixture: ComponentFixture<Aboutcontact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcontact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutcontact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
