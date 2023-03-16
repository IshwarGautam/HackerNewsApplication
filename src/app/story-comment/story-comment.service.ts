import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
const itemUrl = `${baseUrl}/item/`;

@Injectable({
  providedIn: 'root',
})
export class StoryCommentService {
  constructor(private http: HttpClient) {}

  getComment(commentId: number) {
    return this.http.get(`${itemUrl}/${commentId}.json`);
  }
}
