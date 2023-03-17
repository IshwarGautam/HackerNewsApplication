import { Component, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.css'],
})
export class StoryCommentsComponent {
  @Input() commentIds: number[] = [];
  @Input() isFetchComment = false;
  @Input() parentSpinner: NgxSpinnerService = new NgxSpinnerService();
}
