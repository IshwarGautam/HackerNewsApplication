import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Input } from '@angular/core';
import { StoryCommentService } from './story-comment.service';

interface CommentInfo {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent {
  @Input() commentId = 0;
  @Input() isFetchComment = false;
  @Input() parentSpinner: NgxSpinnerService = new NgxSpinnerService();

  commentInfo: CommentInfo | null = null;
  commentText: string = '';

  constructor(
    private storyCommentService: StoryCommentService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnChanges() {
    this.fetchComment();
  }

  fetchComment() {
    if (this.isFetchComment) {
      this.storyCommentService.getComment(this.commentId).subscribe((data) => {
        this.commentInfo = data as CommentInfo;
        this.commentText = this.commentInfo?.text;

        this.parentSpinner.hide();
      });
    }
  }
}
