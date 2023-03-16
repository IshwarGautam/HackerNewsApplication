import { TestBed } from '@angular/core/testing';

import { StoryCommentsService } from './story-comments.service';

describe('StoryCommentsService', () => {
  let service: StoryCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
