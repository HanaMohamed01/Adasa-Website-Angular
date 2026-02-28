import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailspage } from './detailespage';

describe('Detailspage', () => {
  let component: Detailspage;
  let fixture: ComponentFixture<Detailspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
