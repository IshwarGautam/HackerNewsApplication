import { TestBed } from '@angular/core/testing';

import { StoryCommentService } from './story-comment.service';

describe('StoryCommentService', () => {
  let service: StoryCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
