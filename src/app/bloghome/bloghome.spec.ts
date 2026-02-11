import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloghome } from './bloghome';

describe('Bloghome', () => {
  let component: Bloghome;
  let fixture: ComponentFixture<Bloghome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bloghome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bloghome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
