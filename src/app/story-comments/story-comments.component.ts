import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.css'],
})
export class StoryCommentsComponent {
  @Input() commentIds: number[] = [];
}
