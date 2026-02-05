import { TestBed } from '@angular/core/testing';

import { PostsData } from './posts-data';

describe('PostsData', () => {
  let service: PostsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
