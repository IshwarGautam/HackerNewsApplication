import { showText } from '../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
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

  isHidden = true;
  noOfComment = 0;
  onceLoaded = false;
  isFetchComment = false;
  parentSpinner = this.spinner;
  newsData: InputData | null = null;

  constructor(
    private storyItemService: StoryItemService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    this.spinner.show();

    this.storyItemService.getTopStoryById(this.storyId).subscribe((data) => {
      this.newsData = data as InputData;
      this.noOfComment = this.newsData?.kids?.length || 0;

      this.spinner.hide();
    });
  }

  toggleCommentSection() {
    this.isHidden = !this.isHidden;

    if (!this.isHidden) {
      this.isFetchComment = true;

      if (
        !this.onceLoaded &&
        this.newsData &&
        this.newsData.hasOwnProperty('kids')
      ) {
        this.parentSpinner.show();
        this.onceLoaded = true;
      }
    }
  }

  viewComment(count: number) {
    return showText('View Comment', count);
  }

  hideComment(count: number) {
    return showText('Hide Comment', count);
  }

  openNews(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
