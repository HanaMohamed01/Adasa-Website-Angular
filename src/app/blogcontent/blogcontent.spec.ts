import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogcontent } from './blogcontent';

describe('Blogcontent', () => {
  let component: Blogcontent;
  let fixture: ComponentFixture<Blogcontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogcontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogcontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
