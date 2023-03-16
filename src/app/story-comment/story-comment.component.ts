import { Component, Input } from '@angular/core';
import { StoryCommentService } from './story-comment.service';
import { convert } from 'html-to-text';
import { NgxSpinnerService } from 'ngx-spinner';

const options = {
  preserveNewlines: true,
};

@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent {
  @Input() commentId = 0;
  @Input() isFetchComment: boolean = false;

  commentInfo: any = {};
  commentText: string = '';

  constructor(
    private storyCommentService: StoryCommentService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.fetchComment();
  }

  ngOnChanges() {
    this.fetchComment();
  }

  fetchComment() {
    if (this.isFetchComment) {
      this.spinner.show();

      this.storyCommentService.getComment(this.commentId).subscribe((data) => {
        this.commentInfo = data;
        this.commentText = convert(this.commentInfo?.text, options);

        this.spinner.hide();
      });
    }
  }
}
