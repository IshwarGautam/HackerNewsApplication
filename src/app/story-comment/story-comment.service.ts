import { Injectable } from '@angular/core';
import { itemUrl } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoryCommentService {
  constructor(private http: HttpClient) {}

  getComment(commentId: number) {
    return this.http.get(`${itemUrl}/${commentId}.json`);
  }
}
