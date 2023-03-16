import { Component, Input } from '@angular/core';
import { StoryCommentService } from './story-comment.service';
import { convert } from 'html-to-text';

@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent {
  @Input() commentId = 0;
  commentInfo: any = {};
  commentText: string = '';
  constructor(private storyCommentService: StoryCommentService) {}

  ngOnInit() {
    this.fetchComment();
  }

  fetchComment() {
    this.storyCommentService.getComment(this.commentId).subscribe((data) => {
      this.commentInfo = data;
      this.commentText = convert(this.commentInfo.text);
    });
  }
}
