import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecategories } from './homecategories';

describe('Homecategories', () => {
  let component: Homecategories;
  let fixture: ComponentFixture<Homecategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homecategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
