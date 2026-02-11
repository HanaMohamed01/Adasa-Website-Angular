import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogmain } from './blogmain';

describe('Blogmain', () => {
  let component: Blogmain;
  let fixture: ComponentFixture<Blogmain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogmain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogmain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
