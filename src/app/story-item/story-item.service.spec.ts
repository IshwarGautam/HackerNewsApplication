import { TestBed } from '@angular/core/testing';

import { StoryItemService } from './story-item.service';

describe('StoryItemService', () => {
  let service: StoryItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
