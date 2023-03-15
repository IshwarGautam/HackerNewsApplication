import { Component, Input } from '@angular/core';
import { StoryItemService } from './story-item.service';

interface InputData {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css'],
})
export class StoryItemComponent {
  @Input() storyId: number = 0;
  @Input() index: number = 0;
  @Input() searchTerm: string = '';

  newsData: InputData | null = null;

  constructor(private storyItemService: StoryItemService) {}

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    this.storyItemService.getTopStoryById(this.storyId).subscribe((data) => {
      this.newsData = data as InputData;
    });
  }
}
